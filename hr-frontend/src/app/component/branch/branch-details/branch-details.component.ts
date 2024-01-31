
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../branch.service';
import { Branch } from '../branch.model';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  branch: Branch | undefined;

  constructor(private route: ActivatedRoute, private branchService: BranchService) { }

  ngOnInit(): void {
    
    const branchId = this.route.snapshot.params['id'];

    
    this.branchService.getBranches().subscribe(
      (branches) => {
        
        const branch = branches.find(b => b.id === branchId);
        if (branch) {
          this.branch = branch;
        }
      },
      (error) => {
        console.error('Error fetching branches:', error);
      }
    );
      }
}
