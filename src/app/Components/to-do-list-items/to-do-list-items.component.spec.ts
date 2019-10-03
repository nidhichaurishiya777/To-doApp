import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemsComponent } from './to-do-list-items.component';

describe('ToDoListItemsComponent', () => {
  let component: ToDoListItemsComponent;
  let fixture: ComponentFixture<ToDoListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
