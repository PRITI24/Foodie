import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDishComponent } from './remove-dish.component';

describe('RemoveDishComponent', () => {
  let component: RemoveDishComponent;
  let fixture: ComponentFixture<RemoveDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
