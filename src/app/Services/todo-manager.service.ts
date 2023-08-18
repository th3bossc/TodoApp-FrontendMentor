import { Injectable, WritableSignal, effect, signal } from '@angular/core';


export interface todoInterface {
  content : string;
  completed : boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  allTodos : WritableSignal<todoInterface[]> = signal<todoInterface[]>(null)
  
  constructor() {
    effect(() => this.saveTodos(this.allTodos()));
  }

  createNewTodo(content : string) {
    this.allTodos.mutate(values => values.push({content, completed : false}));
  }

  toggleCompleted(index : number) {
    this.allTodos.mutate(values => values[index].completed = !(values[index].completed));
  }

  clearCompleted() {
    console.log("function is callled");
    this.allTodos.mutate(values => this.allTodos.set(values.filter((value) => value.completed === false)));
  }

  deleteTodo(index : number) {
    this.allTodos.mutate(values => values.splice(index, 1));
  }

  saveTodos(value : todoInterface[]) {
    console.log(value);
    if (value !== null)
      localStorage.setItem('todos', JSON.stringify(value));
  }

  loadTodo() {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(savedTodos);
    if (savedTodos !== null)
      this.allTodos.set(savedTodos);
    else  
      this.allTodos.set([]);
  }

}
