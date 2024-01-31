// branch.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from './branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://127.0.0.1:8000/api/hrapp';

  constructor(private http: HttpClient) { }

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${this.apiUrl}/branches/`);
  }

  getBranchDetails(branchId: number): Observable<Branch> {
    return this.http.get<Branch>(`${this.apiUrl}/branches/${branchId}/`);
  }

  createBranch(branch: Branch): Observable<Branch> {
    return this.http.post<Branch>(`${this.apiUrl}/branches/`, branch);
  }

  updateBranch(branchId: number, updatedBranch: Branch): Observable<Branch> {
    return this.http.put<Branch>(`${this.apiUrl}/branches/${branchId}/`, updatedBranch);
  }
  deleteBranch(id: number) {
    this.http.delete(`http://127.0.0.1:8000/branches/${id}/`).subscribe(() => {
      this. getBranches();
    });
  }
}
