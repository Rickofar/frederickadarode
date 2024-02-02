import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'webApp-modal',
  templateUrl: './web-app-modal.component.html',
  styleUrl: './web-app-modal.component.scss',
})
export class WebAppModalComponent {
  @Input() showModal!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router) {}

  onCloseModal() {
    this.closeModal.emit();
  }

  goToPage(tab: string) {
    this.router.navigate([tab]);
    this.onCloseModal();
  }
}
