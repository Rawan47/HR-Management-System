// branch-update.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../branch.service';
import { Branch } from '../branch.model'; 

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.css']
})
export class BranchUpdateComponent implements OnInit {
  branchForm!: FormGroup;
  branchId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private branchService: BranchService
  ) {
    this.branchId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchBranchDetails();
  }

  private initializeForm(): void {
    this.branchForm = this.fb.group({
      name: ['', Validators.required],
      building_number: ['', Validators.required],
      street: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      manager: [null],
    });
  }

  private fetchBranchDetails(): void {
    this.branchService.getBranchDetails(this.branchId).subscribe(
      (branch) => {
        this.populateForm(branch);
      },
      (error) => {
        console.error('Error fetching branch details:', error);
      }
    );
  }

  private populateForm(branch: Branch): void {
    this.branchForm.patchValue({
      name: branch.name,
      building_number: branch.building_number,
      street: branch.street,
      area: branch.area,
      city: branch.city,
      country: branch.country,
      manager: branch.manager?.id || null,
    });
  }

  onSubmit(): void {
    if (this.branchForm.valid) {
      const updatedBranch: Branch = {
        id: this.branchId,
        name: this.branchForm.value.name,
        building_number: this.branchForm.value.building_number,
        street: this.branchForm.value.street,
        area: this.branchForm.value.area,
        city: this.branchForm.value.city,
        country: this.branchForm.value.country,
        manager: this.branchForm.value.manager,
      };

      this.branchService.updateBranch(this.branchId, updatedBranch).subscribe(
        (response) => {
          console.log('Branch updated successfully:', response);
         
        },
        (error) => {
          console.error('Error updating branch:', error);
        }
      );
    }
  }
}
