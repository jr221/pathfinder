import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterResumeComponent } from './master-resume.component';

describe('MasterResumeComponent', () => {
  let component: MasterResumeComponent;
  let fixture: ComponentFixture<MasterResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
