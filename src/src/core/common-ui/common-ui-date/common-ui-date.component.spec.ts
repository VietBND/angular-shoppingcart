import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiDateComponent } from './common-ui-date.component';

describe('CommonUiDateComponent', () => {
  let component: CommonUiDateComponent;
  let fixture: ComponentFixture<CommonUiDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
