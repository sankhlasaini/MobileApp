import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedDialogComponent } from './news-feed-dialog.component';

describe('NewsFeedDialogComponent', () => {
  let component: NewsFeedDialogComponent;
  let fixture: ComponentFixture<NewsFeedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
