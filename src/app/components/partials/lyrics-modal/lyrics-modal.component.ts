import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lyrics-modal',
  templateUrl: './lyrics-modal.component.html',
  styleUrl: './lyrics-modal.component.scss',
})
export class LyricsModalComponent {
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
