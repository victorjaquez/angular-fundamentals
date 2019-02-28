import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentNumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentNumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentNumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];

  constructor() { }

  // function that returns an observable
  // In simple terms, the studentObservable is publishing our primary data array that is the students. If an entity wants to get the values of the observable, then it first needs to subscribe to the observable, and then thats when studentObservable will start to publish the values, and the subscriber will get the values. Essentially a 'newsletter'
  public getStudents(): any {
    const studentObservable = new Observable(observer => { // create a new Observable  
      setTimeout(() => {
        observer.next(this.students); // next is the handler for the delivered value
      }, 100) // produces students array after 1 second if the subscriber subscribes to the observable
    });

    return studentObservable; // "newsletter stream of data containing students"
  }
  
}
