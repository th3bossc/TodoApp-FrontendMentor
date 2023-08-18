import { Component } from '@angular/core';
import { TodoManagerService } from './Services/todo-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';

  constructor(private todoService : TodoManagerService) { }

  ngOnInit() {
    this.todoService.loadTodo();
  }
}
