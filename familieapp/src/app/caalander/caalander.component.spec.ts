import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaalanderComponent } from './caalander.component';

describe('CaalanderComponent', () => {
  let component: CaalanderComponent;
  let fixture: ComponentFixture<CaalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
