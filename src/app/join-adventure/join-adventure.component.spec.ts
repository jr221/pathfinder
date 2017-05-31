import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAdventureComponent } from './join-adventure.component';

describe('JoinAdventureComponent', () => {
  let component: JoinAdventureComponent;
  let fixture: ComponentFixture<JoinAdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAdventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
