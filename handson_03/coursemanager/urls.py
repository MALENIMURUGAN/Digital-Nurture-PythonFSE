from django.contrib import admin
from django.urls import path
from university.views import department_list_create, department_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/departments/', department_list_create),          # To view all or create one
    path('api/departments/<int:pk>/', department_detail),      # To update or delete a specific one
]