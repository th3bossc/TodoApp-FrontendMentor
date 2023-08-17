import { Injectable, WritableSignal, effect, signal } from '@angular/core';


export interface todoInterface {
  content : string;
  completed : boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TodoManagerService {
  allTodos : WritableSignal<todoInterface[]> = signal<todoInterface[]>([])
  
  constructor() { }

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

}
