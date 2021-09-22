import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridofdoomComponent } from './gridofdoom.component';

describe('GridofdoomComponent', () => {
  let component: GridofdoomComponent;
  let fixture: ComponentFixture<GridofdoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridofdoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridofdoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
