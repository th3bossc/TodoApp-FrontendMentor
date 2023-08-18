import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { ThemeManagerService } from '../Services/theme-manager.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  imageLocation : string;
  backgroundImage : string;
  constructor(private themeService : ThemeManagerService) {
    effect(() => {
      if (!this.themeService.currentTheme()) {
        this.imageLocation = '/assets/icon-moon.svg';
        this.backgroundImage = '/assets/bg-desktop-light.jpg';
      }
      else {
        this.imageLocation = '/assets/icon-sun.svg';
        this.backgroundImage = '/assets/bg-desktop-dark.jpg';
      }
    })
  }

  toggleTheme() {
    this.themeService.currentTheme.set(!this.themeService.currentTheme());
  }
}
