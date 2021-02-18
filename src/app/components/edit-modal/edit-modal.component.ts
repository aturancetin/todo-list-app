import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() saveChangesEvent: EventEmitter<Todo> = new EventEmitter();
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  newTodo?: Todo;
  

  constructor() { }

  ngOnInit(): void {
    this.newTodo = {
      ...this.todo
    }
  }

  closeModal(close:boolean) {
    close = false;
    this.closeModalEvent.emit(close);
  }
  saveChanges() {
    this.newTodo = {
      ...this.newTodo,
      id: this.todo!.id
    }
    this.saveChangesEvent.emit(this.newTodo);
  }

}
