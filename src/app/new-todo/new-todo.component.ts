import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoManagerService } from '../Services/todo-manager.service';
import { ThemeManagerService } from '../Services/theme-manager.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {
  newTodoForm : FormGroup;

  constructor(private todoService : TodoManagerService, public themeService : ThemeManagerService) { }

  ngOnInit() {
    this.newTodoForm = new FormGroup({
      todo : new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    const newTodo = this.newTodoForm.value['todo'];
    if (newTodo)
      this.todoService.createNewTodo(newTodo);
    this.newTodoForm.reset();
  }
}
