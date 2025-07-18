import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalComponent } from './safe-traversal.component';

describe('SafeTraversalComponent', () => {
  let component: SafeTraversalComponent;
  let fixture: ComponentFixture<SafeTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafeTraversalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
