import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiDaterangeComponent } from './common-ui-daterange.component';

describe('CommonUiDaterangeComponent', () => {
  let component: CommonUiDaterangeComponent;
  let fixture: ComponentFixture<CommonUiDaterangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiDaterangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiDaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
