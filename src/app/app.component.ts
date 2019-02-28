import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentservice: StudentService) {}

  ngOnInit() {
    // defining observable path in a variable
    const studentObservable = this.studentservice.getStudents();
    // subscribing to the observable, and filling students with the data
    studentObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;
    })

  }
}
