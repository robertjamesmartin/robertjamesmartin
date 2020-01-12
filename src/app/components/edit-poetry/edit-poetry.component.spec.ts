import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPoetryComponent } from './edit-poetry.component';

describe('EditPoetryComponent', () => {
  let component: EditPoetryComponent;
  let fixture: ComponentFixture<EditPoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
