import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTalksBullshitWalksComponent } from './money-talks-bullshit-walks.component';

describe('MoneyTalksBullshitWalksComponent', () => {
  let component: MoneyTalksBullshitWalksComponent;
  let fixture: ComponentFixture<MoneyTalksBullshitWalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyTalksBullshitWalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTalksBullshitWalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
