import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUiAutocompleteComponent } from './common-ui-autocomplete.component';

describe('CommonUiAutocompleteComponent', () => {
  let component: CommonUiAutocompleteComponent;
  let fixture: ComponentFixture<CommonUiAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonUiAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
