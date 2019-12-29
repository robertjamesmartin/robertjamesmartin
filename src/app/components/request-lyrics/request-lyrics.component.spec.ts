import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLyricsComponent } from './request-lyrics.component';

describe('RequestLyricsComponent', () => {
  let component: RequestLyricsComponent;
  let fixture: ComponentFixture<RequestLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
