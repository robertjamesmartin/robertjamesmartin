import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoetryComponent } from './create-poetry.component';

describe('CreatePoetryComponent', () => {
  let component: CreatePoetryComponent;
  let fixture: ComponentFixture<CreatePoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
