import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiSelectComponent } from './common-ui-select.component';

describe('CommonUiSelectComponent', () => {
  let component: CommonUiSelectComponent;
  let fixture: ComponentFixture<CommonUiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
