import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ux-modal',
  templateUrl: './ux-modal.component.html',
  styleUrl: './ux-modal.component.scss',
})
export class UxModalComponent {
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
