import { Component, OnInit } from '@angular/core';
// import { Student } from './student.model';
// import { StudentService } from './student.service';
import Singer from './Singer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  singers: Singer[] = [
     {
    'artist': 'Michael Jackson',
    'country': 'USA'
  },
  {
    'artist': 'Justin Bieber',
    'country': 'Canada'
  },
  {
    'artist': 'Daddy Yankee',
    'country': 'Puerto Rico'
  },
  {
     'artist': 'A R Rehman',
      'country': 'India'
  },
  {
      'artist': 'Selena Gomez',
      'country': 'USA'
  }
 ];
}






// export class AppComponent implements OnInit {
//   students: Student[] = [];

//   constructor(private studentservice: StudentService) {}

//   ngOnInit() {
//     // defining observable path in a variable
//     const studentObservable = this.studentservice.getStudents();
//     // subscribing to the observable, and filling students with the data
//     studentObservable.subscribe((studentsData: Student[]) => {
//       this.students = studentsData;
//     })

//   }
// }
