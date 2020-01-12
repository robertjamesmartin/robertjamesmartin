import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFictionComponent } from './view-fiction.component';

describe('ViewFictionComponent', () => {
  let component: ViewFictionComponent;
  let fixture: ComponentFixture<ViewFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
