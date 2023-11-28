import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarOpenAnimation, SidebarCloseAnimation } from './animation';
import { transition, trigger, useAnimation } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
const animationParams = {
  menuWidth: '250px',
  animationStyle: '500ms ease',
};

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('sideMenu', [
      transition(':enter', [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
      transition(':leave', [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams,
          },
        }),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  animationState: 'visible' | 'hidden' = 'visible';
  isOpen = false;
  isScrolled = false;
  isScrolling = false;
  isAtTop = true;

  items = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Service', url: '/service' },
    { name: 'Contact', url: '/contact' },
  ];
  activeTab!: string;

  private scrollTimeout: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTab = this.getActiveTabFromRoute(event.url);
      }
    });
  }

  downloadResume(): void {
    const resumeUrl = '/assets/files/Frederick Adarode-Resume.pdf';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumeUrl);
    link.setAttribute('download', 'Frederick Adarode-Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;

    this.isScrolling = true;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;

      if (window.scrollY === 0) {
        this.isAtTop = true;
      } else {
        this.isAtTop = false;
      }
    }, 200);
  }

  goToPage(tab: string) {
    this.router.navigate([tab]);
    this.activeTab = tab;
  }

  private getActiveTabFromRoute(url: string): string {
    const parts = url.split('/');
    const tabName = parts[parts.length - 1];
    return tabName || 'home';
  }
}
