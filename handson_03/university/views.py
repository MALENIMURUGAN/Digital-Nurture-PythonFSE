import json
from django.http import JsonResponse, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from .models import Department

@csrf_exempt
def department_list_create(request):
    # GET: Fetch all departments
    if request.method == 'GET':
        departments = Department.objects.all()
        data = [{"id": d.id, "name": d.name, "code": d.code} for d in departments]
        return JsonResponse(data, safe=False)
        
    # POST: Add a brand new department
    elif request.method == 'POST':
        body = json.loads(request.body)
        new_dept = Department.objects.create(
            name=body.get('name'),
            code=body.get('code')
        )
        return JsonResponse({"id": new_dept.id, "message": "Department created successfully!"}, status=21)
        
    return HttpResponseNotAllowed(['GET', 'POST'])

@csrf_exempt
def department_detail(request, pk):
    try:
        department = Department.objects.get(pk=pk)
    except Department.DoesNotExist:
        return JsonResponse({"error": "Department not found"}, status=404)

    # PUT: Update an existing department details
    if request.method == 'PUT':
        body = json.loads(request.body)
        department.name = body.get('name', department.name)
        department.code = body.get('code', department.code)
        department.save()
        return JsonResponse({"message": "Department updated successfully!"})

    # DELETE: Erase a department
    elif request.method == 'DELETE':
        department.delete()
        return JsonResponse({"message": "Department deleted successfully!"})

    return HttpResponseNotAllowed(['PUT', 'DELETE'])