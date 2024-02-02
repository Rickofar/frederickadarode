import { Component, OnInit } from '@angular/core';
import { ColorModeService } from './services/color-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Frederick Adarode';

  constructor(private colorModeService: ColorModeService) {
    this.colorModeService.colorModeChange.subscribe(() => {
      this.updateTheme();
    });
    this.updateTheme();
  }

  ngOnInit() {}

  private updateTheme(): void {
    const isDarkMode = this.colorModeService.isDarkMode();

    document.documentElement.style.setProperty(
      '--background-color',
      isDarkMode ? '#3d3f4a' : '#f5f5f5'
    );

    document.documentElement.style.setProperty(
      '--footer-color',
      isDarkMode ? '#6f6b80' : '#e8eaff'
    );

    document.documentElement.style.setProperty(
      '--off-white-color',
      isDarkMode ? '#cacaca' : '#6f6b80'
    );

    document.documentElement.style.setProperty(
      '--hover-color',
      isDarkMode ? '#768dff' : '#768dff'
    );

    document.documentElement.style.setProperty(
      '--modal-background-color',
      isDarkMode ? '#9195ae' : '#d7dbed'
    );

    document.documentElement.style.setProperty(
      '--tab-button-color',
      isDarkMode ? '#fff' : '#768cff'
    );

    document.documentElement.style.setProperty(
      '--filter-color',
      isDarkMode ? '#333' : '#333'
    );

    document.documentElement.style.setProperty(
      '--text-color',
      isDarkMode ? '#f5f5f5' : '#000000'
    );

    document.documentElement.style.setProperty(
      '--not-found-color',
      isDarkMode ? '#f00' : '#f00'
    );

    document.documentElement.style.setProperty(
      '--toggle-button',
      isDarkMode ? '#f5f5f5' : '#5074cf'
    );

    document.documentElement.style.setProperty(
      '--button-background',
      isDarkMode ? '#f5f5f5' : '#5074cf'
    );

    document.documentElement.style.setProperty(
      '--button-text-color',
      isDarkMode ? '#5074cf' : '#fff'
    );

    document.documentElement.style.setProperty(
      '--button-text-color',
      isDarkMode ? '#5074cf' : '#fff'
    );

    document.documentElement.style.setProperty(
      '--toggle-span',
      isDarkMode ? '#f5f5f5' : '#768cff'
    );
  }
}
