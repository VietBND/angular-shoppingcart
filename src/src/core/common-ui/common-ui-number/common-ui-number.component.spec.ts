import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiNumberComponent } from './common-ui-number.component';

describe('CommonUiNumberComponent', () => {
  let component: CommonUiNumberComponent;
  let fixture: ComponentFixture<CommonUiNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
