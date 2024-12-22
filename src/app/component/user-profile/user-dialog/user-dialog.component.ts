import { NgClass } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class UserDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialogRef<UserDialogComponent>) {}
  ngOnInit(): void {
    console.log(this.data);
  }



  closeDialog(): void {
    this.dialogRef.close();
  }
}