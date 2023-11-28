import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  private observer: IntersectionObserver | undefined;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeIntersectionObserver();
  }

  private initializeIntersectionObserver(): void {
    const progressBarElements =
      this.elementRef.nativeElement.querySelectorAll('.progress-bar');

    if (typeof this.observer === 'undefined') {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBarElement = entry.target.querySelector(
              '.bar > div'
            ) as HTMLElement;
            if (progressBarElement) {
              setTimeout(() => {
                progressBarElement.classList.add('animate');
              }, 3000); // Adjust delay in milliseconds
            }
            this.observer?.unobserve(entry.target);
          }
        });
      });
    }

    progressBarElements.forEach((element: Element) => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
