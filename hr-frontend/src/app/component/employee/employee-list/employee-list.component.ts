import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = { name: '', age: 0, email: '', phoneNumber: '' };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  addEmployee(): void {
    
    this.employeeService.addEmployee(this.newEmployee);
   
    this.newEmployee = { name: '', age: 0, email: '', phoneNumber: '' };
  }
  
}
