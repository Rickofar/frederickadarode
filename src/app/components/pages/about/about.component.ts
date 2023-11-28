import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
}
