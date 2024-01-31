import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

    id: number;
    name: string;
    age: number;
    email: string;
    phone_number: string;
    branch: any; 
  
    constructor(data: any = {}) {
      this.id = data.id || null;
      this.name = data.name || '';
      this.age = data.age || 0;
      this.email = data.email || '';
      this.phone_number = data.phone_number || '';
      this.branch = data.branch || null;
    }
  }




