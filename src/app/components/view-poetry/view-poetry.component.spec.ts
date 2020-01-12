import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoetryComponent } from './view-poetry.component';

describe('ViewPoetryComponent', () => {
  let component: ViewPoetryComponent;
  let fixture: ComponentFixture<ViewPoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
