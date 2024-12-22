import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../component/user-profile/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  constructor(private matdialog:MatDialog){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  items = [
    { id: '1', name: 'Batarang', description: 'A signature weapon.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '2', name: 'Grappling Gun', description: 'A tool for scaling buildings.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '3', name: 'Batman Car', description: 'A high-tech vehicle.', img: '../../../assets/img/ai-generated-7700259_1280.jpg'}
  ];

  viewDetails(str:any):void{
    const dialogRef = this.matdialog.open(UserDialogComponent,{
      width:'w-auto',
      data: {
        gadget: str
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

}