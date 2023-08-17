import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, WritableSignal, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  currentTheme : WritableSignal<boolean> = signal(false);

  constructor(@Inject(DOCUMENT) private document : Document) {
    effect(() => this.changeTheme(this.currentTheme()));
  }

  changeTheme(theme : boolean) {
    if (!theme) {
      this.document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
      this.document.body.style.color = 'black';
    }
    else {
      this.document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
      this.document.body.style.color = 'white';
    }
  }


}
