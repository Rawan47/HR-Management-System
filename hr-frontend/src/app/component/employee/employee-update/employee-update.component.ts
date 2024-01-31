// employee-update.component.ts
import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent {
  selectedEmployee: Employee = { id: 0, name: '', age: 0, email: '', phoneNumber: '' };

  constructor(private employeeService: EmployeeService) {}

  updateEmployee(): void {
   
    this.employeeService.updateEmployee(this.selectedEmployee);
  }
}
