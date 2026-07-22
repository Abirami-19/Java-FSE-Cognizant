import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent {

  student = {
    id: 101,
    name: 'Abi Bala',
    department: 'Information Technology',
    year: '4th Year',
    email: 'abibala@example.com',
    cgpa: 8.9
  };

}