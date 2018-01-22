import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginContentComponent } from './pre-login-content.component';

describe('PreLoginContentComponent', () => {
  let component: PreLoginContentComponent;
  let fixture: ComponentFixture<PreLoginContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
