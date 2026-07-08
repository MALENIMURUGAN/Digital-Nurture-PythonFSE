import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      grade: 'A'
    },
    {
      id: 2,
      name: 'Database Management Systems',
      code: 'CS102',
      credits: 4,
      grade: 'A+'
    },
    {
      id: 3,
      name: 'Operating Systems',
      code: 'CS103',
      credits: 3,
      grade: 'B+'
    },
    {
      id: 4,
      name: 'Computer Networks',
      code: 'CS104',
      credits: 3,
      grade: 'A'
    },
    {
      id: 5,
      name: 'Web Development',
      code: 'CS105',
      credits: 4,
      grade: 'A+'
    }
  ];

  constructor() {}

  getCourses(): Observable<Course[]> {
    return of(this.courses).pipe(delay(1000));
  }

}