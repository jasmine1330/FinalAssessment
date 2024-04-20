import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  showForm: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe((data: any) => {
        this.students = data.students;
      });
  }

  createStudent(): void {
    // Show form for creating new student
    this.showForm = true;
  }

  updateStudent(id: number): void {
    // Show form for updating student with given id
    this.showForm = true;
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id)
      .subscribe(() => {
        // Remove student from list
        this.students = this.students.filter(student => student.id !== id);
      });
  }
}
