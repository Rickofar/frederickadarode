import { Component, OnInit } from '@angular/core';
import { WebDevModalComponent } from '../../partials/web-dev-modal/web-dev-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  async webDevModal() {
    const dialogRef = this.dialog.open(WebDevModalComponent, {
      width: '400px',
      data: {},
      panelClass: 'webDevModal',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal dismissed');
    });
  }
}
