import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'webDev-modal',
  templateUrl: './web-dev-modal.component.html',
  styleUrls: ['./web-dev-modal.component.scss'],
})
export class WebDevModalComponent {
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
