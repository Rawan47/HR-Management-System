import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Branch } from '../branch/branch.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://127.0.0.1:8000/api/hrapp'; 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
  
    return this.http.post<Employee>(`${this.apiUrl}/employees`, employee);
  }

  getBranches(): Observable<Branch[]> {
    
    return this.http.get<Branch[]>(`${this.apiUrl}/branches`);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/employees/${employee.id}`, employee);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`);
  }
  deleteemployee(id: number) {
    this.http.delete(`http://127.0.0.1:8000/branches/${id}/`).subscribe(() => {
      this. getEmployees();
    });
  }

}
