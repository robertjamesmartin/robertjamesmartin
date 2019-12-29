import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFictionComponent } from './request-fiction.component';

describe('RequestFictionComponent', () => {
  let component: RequestFictionComponent;
  let fixture: ComponentFixture<RequestFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
