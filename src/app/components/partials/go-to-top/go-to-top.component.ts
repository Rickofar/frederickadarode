import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'go-to-top',
  templateUrl: './go-to-top.component.html',
  styleUrls: ['./go-to-top.component.scss'],
})
export class GoToTopComponent implements OnInit {
  isScrolled = false;

  constructor() {}

  ngOnInit(): void {
    this.isScrolled = window.scrollY > 100;
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
