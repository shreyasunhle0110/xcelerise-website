import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsConnectComponent } from './lets-connect.component';

describe('LetsConnectComponent', () => {
  let component: LetsConnectComponent;
  let fixture: ComponentFixture<LetsConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetsConnectComponent]
    });
    fixture = TestBed.createComponent(LetsConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
