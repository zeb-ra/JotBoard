import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from '../addTodo/addTodo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent]
    });
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
