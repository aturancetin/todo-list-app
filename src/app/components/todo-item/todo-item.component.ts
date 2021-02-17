import { Todo } from './../../models/Todo';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  modal: boolean = false;

  @Input() todo!: Todo;
  @Output() updateTodos: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
  }

  onControlModal() {
    this.modal = !this.modal;
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  saveChanges($event:Todo) {
    this.todosService.editTodo($event).subscribe(data => {
        this.todo = data;
        this.updateTodos.emit(this.todo);
        this.onControlModal();
    },
    error => {
      console.log("Error",error);
    });
    
  }

  closeModal($event: boolean) {
    this.modal = $event;
  }

}
