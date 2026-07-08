import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  loading = false;

  selectedCourse?: Course;

  courses: Course[] = [
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
    }
  ];

  enrollCourse(course: Course) {
    this.selectedCourse = course;
    alert(`Enrolled in ${course.name}`);
  }
}