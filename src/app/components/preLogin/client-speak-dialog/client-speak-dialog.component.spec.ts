import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpeakDialogComponent } from './client-speak-dialog.component';

describe('ClientSpeakDialogComponent', () => {
  let component: ClientSpeakDialogComponent;
  let fixture: ComponentFixture<ClientSpeakDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSpeakDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSpeakDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
