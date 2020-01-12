import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFictionComponent } from './create-fiction.component';

describe('CreateFictionComponent', () => {
  let component: CreateFictionComponent;
  let fixture: ComponentFixture<CreateFictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
