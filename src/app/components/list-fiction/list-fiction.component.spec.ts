import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFictionComponent } from './list-fiction.component';

describe('ListFictionComponent', () => {
  let component: ListFictionComponent;
  let fixture: ComponentFixture<ListFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
