import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOptionsComponent } from './master-options.component';

describe('MasterOptionsComponent', () => {
  let component: MasterOptionsComponent;
  let fixture: ComponentFixture<MasterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
