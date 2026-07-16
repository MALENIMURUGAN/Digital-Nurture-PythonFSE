import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../course-card/course-card';
import { CourseService } from '../course';
import { Header } from '../header/header';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    Header
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  searchTerm = '';
  loading = true;

  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(data => {

      const courseNames = [
  'Angular Fundamentals',
  'React Development',
  'Python Programming',
  'Java Programming',
  'Database Management'
];

this.courses = data.map((item, index) => ({
  name: courseNames[index],
  code: 'CS10' + (index + 1),
  credits: 4,
  grade: 'A'
}));

      this.loading = false;

    });

  }

}