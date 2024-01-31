
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | undefined;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployeeDetails();
  }

  private loadEmployeeDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id).subscribe((employee) => {
      this.employee = employee;
    });
  }
}
