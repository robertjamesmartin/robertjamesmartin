import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPoetryComponent } from './request-poetry.component';

describe('RequestPoetryComponent', () => {
  let component: RequestPoetryComponent;
  let fixture: ComponentFixture<RequestPoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
