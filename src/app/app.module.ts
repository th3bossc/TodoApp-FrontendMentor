import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlltodosComponent } from './alltodos/alltodos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { ContainerComponent } from './container/container.component';
import { TodoManagerService } from './Services/todo-manager.service';
import { ThemeManagerService } from './Services/theme-manager.service';

import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    AlltodosComponent,
    NewTodoComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [TodoManagerService, ThemeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
