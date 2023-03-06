import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisavailComponent } from './visavail.component';

describe('VisavailComponent', () => {
  let component: VisavailComponent;
  let fixture: ComponentFixture<VisavailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisavailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisavailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
