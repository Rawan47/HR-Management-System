import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-branch-create',
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.css']
})
export class BranchCreateComponent implements OnInit {
  branchForm!: FormGroup;

  constructor(private fb: FormBuilder, private branchService: BranchService) { }

  ngOnInit(): void {
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

  onSubmit() {
    if (this.branchForm.valid) {
      this.branchService.createBranch(this.branchForm.value).subscribe(
        (response) => {
          console.log('Branch created successfully:', response);
         
        },
        (error) => {
          console.error('Error creating branch:', error);
        }
      );
    }
  }
}
