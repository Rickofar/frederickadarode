import { Component } from '@angular/core';
import { ColorModeService } from 'src/app/services/color-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  template: ` <div (click)="toggleColorMode()">
    <button>Toggle Theme</button>
  </div>`,
  styles: [
    `
      div {
        position: fixed;
        bottom: 5rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transition: all 1s ease-in-out;
        visibility: visible;
        animation: showToggle 3s forwards;
      }

      @keyframes showToggle {
        0% {
          right: -2rem;
          visibility: hidden;
          opacity: 0;
        }

        50% {
          right: 2rem;
          opacity: 1;
          visibility: visible;
        }

        to {
          opacity: 1;
        }
      }

      button {
        color: var(--button-text-color);
        background: var(--button-background);
        font-size: 0.8rem;
        padding: 0.5rem;
        border: none;
        outline: none;
        border-radius: 5px;
        box-shadow: 0 0 5px var(--button-background);
      }

      button:hover {
        cursor: pointer;
      }
    `,
  ],
})
export class DarkModeToggleComponent {
  constructor(private colorModeService: ColorModeService) {}

  toggleColorMode(): void {
    this.colorModeService.toggleColorMode();
  }
}
