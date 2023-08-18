import { Component } from '@angular/core';
import { TodoManagerService } from './Services/todo-manager.service';
import { ThemeManagerService } from './Services/theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';

  constructor(private todoService : TodoManagerService, private themeService : ThemeManagerService) { }

  ngOnInit() {
    this.todoService.loadTodo();
    this.themeService.loadTheme();
  }
}
