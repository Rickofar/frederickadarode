import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'webDev-modal',
  templateUrl: './web-dev-modal.component.html',
  styleUrls: ['./web-dev-modal.component.scss'],
})
export class WebDevModalComponent {
  @Input() showModal!: boolean;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
