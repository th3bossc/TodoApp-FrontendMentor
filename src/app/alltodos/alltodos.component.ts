import { Component, effect, WritableSignal, signal } from '@angular/core';
import { TodoManagerService, todoInterface } from '../Services/todo-manager.service';
import {
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ThemeManagerService } from '../Services/theme-manager.service';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.scss']
})
export class AlltodosComponent {
  allTodos : todoInterface[];
  itemsLeft : number;
  mode : WritableSignal<string> = signal('all');
  constructor (private todoService : TodoManagerService, public themeService : ThemeManagerService) {
    effect(() => {
      if (this.mode() === 'all')
        this.allTodos = this.todoService.allTodos();
      else if (this.mode() === 'active')
        this.allTodos = this.todoService.allTodos().filter((value) => value.completed === false);
      else
        this.allTodos = this.todoService.allTodos().filter((value) => value.completed === true);
    });
    effect(() => this.itemsLeft = todoService.allTodos().filter((value) => value.completed === false).length)
  }

  toggleCompleted(index : number) {
    this.todoService.toggleCompleted(index);
  }

  drop(event : CdkDragDrop<todoInterface[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  changeMode(newMode : string) {
    this.mode.set(newMode);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  deleteTodo(index : number) {
    this.todoService.deleteTodo(index);
  }
}
