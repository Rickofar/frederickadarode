import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  webDevModal: boolean = false;
  webAppModal: boolean = false;
  uxModal: boolean = false;
  lyricModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openWebDevModal() {
    this.webDevModal = true;
  }

  closeWebDevModal() {
    this.webDevModal = false;
  }

  openWebAppModal() {
    this.webAppModal = true;
  }

  closeWebAppModal() {
    this.webAppModal = false;
  }

  openUxModal() {
    this.uxModal = true;
  }

  closeUxModal() {
    this.uxModal = false;
  }

  openLyricModal() {
    this.lyricModal = true;
  }

  closeLyricModal() {
    this.lyricModal = false;
  }
}
