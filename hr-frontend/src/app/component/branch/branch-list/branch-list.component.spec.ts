import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BranchListComponent } from './branch-list.component';

describe('BranchListComponent', () => {
  let component: BranchListComponent;
  let fixture: ComponentFixture<BranchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchListComponent],
    });

    fixture = TestBed.createComponent(BranchListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});

