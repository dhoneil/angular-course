import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  //add input for title
  @Input()
  title: string;

  //add input for Course
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  //output for courseSelected
  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Course card component - button clicked...");
  }

  isImageVisible() {

  }
}
