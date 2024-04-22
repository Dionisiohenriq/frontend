import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-custom-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css',
})
export class CustomDialogComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CustomDialogComponent>
  ) {}

  openDialog() {
    this.dialog.open(CustomDialogComponent);
  }
}
