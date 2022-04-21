import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiTextareaComponent } from './common-ui-textarea.component';

describe('CommonUiTextareaComponent', () => {
  let component: CommonUiTextareaComponent;
  let fixture: ComponentFixture<CommonUiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
