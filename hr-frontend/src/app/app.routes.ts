


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './component/employee/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './component/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './component/employee/employee-update/employee-update.component';
import { BranchListComponent } from './component/branch/branch-list/branch-list.component';
import { BranchDetailsComponent } from './component/branch/branch-details/branch-details.component';
import { BranchCreateComponent } from './component/branch/branch-create/branch-create.component';
import { BranchUpdateComponent } from './component/branch/branch-update/branch-update.component';


export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'update-employee/:id', component: EmployeeUpdateComponent },
  { path: 'branches', component: BranchListComponent },
  { path: 'branches/:id', component: BranchDetailsComponent },
  { path: 'create-branch', component: BranchCreateComponent },
  { path: 'update-branch/:id', component: BranchUpdateComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
