import { Component, effect } from '@angular/core';
import { ThemeManagerService } from '../Services/theme-manager.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  imageLocation : string

  constructor(private themeService : ThemeManagerService) {
    effect(() => (!this.themeService.currentTheme()) ? this.imageLocation = '/assets/icon-moon.svg' : this.imageLocation = '/assets/icon-sun.svg');
  }

  toggleTheme() {
    this.themeService.currentTheme.set(!this.themeService.currentTheme());
  }
}
