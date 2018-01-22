import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePaperDialogComponent } from './white-paper-dialog.component';

describe('WhitePaperDialogComponent', () => {
  let component: WhitePaperDialogComponent;
  let fixture: ComponentFixture<WhitePaperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhitePaperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePaperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
