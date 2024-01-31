
import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent {
  newEmployee: Employee = { name: '', age: 0, email: '', phoneNumber: '' };

  constructor(private employeeService: EmployeeService) {}

  addEmployee(): void {
    
    this.employeeService.addEmployee(this.newEmployee);
    
    this.newEmployee = { name: '', age: 0, email: '', phoneNumber: '' };
  }
}

