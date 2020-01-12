import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoetryComponent } from './list-poetry.component';

describe('ListPoetryComponent', () => {
  let component: ListPoetryComponent;
  let fixture: ComponentFixture<ListPoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
