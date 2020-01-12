import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLyricsComponent } from './list-lyrics.component';

describe('ListLyricsComponent', () => {
  let component: ListLyricsComponent;
  let fixture: ComponentFixture<ListLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
