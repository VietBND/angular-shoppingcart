import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiTextboxComponent } from './common-ui-textbox.component';

describe('CommonUiTextboxComponent', () => {
  let component: CommonUiTextboxComponent;
  let fixture: ComponentFixture<CommonUiTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
