import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistCardComponent } from './minimalist-card.component';

describe('MinimalistCardComponent', () => {
  let component: MinimalistCardComponent;
  let fixture: ComponentFixture<MinimalistCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimalistCardComponent]
    });
    fixture = TestBed.createComponent(MinimalistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
