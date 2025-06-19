import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenDisplaysComponent } from './hidden-displays.component';

describe('HiddenDisplaysComponent', () => {
  let component: HiddenDisplaysComponent;
  let fixture: ComponentFixture<HiddenDisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiddenDisplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
