import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../component/user-profile/user-dialog/user-dialog.component';
import { SearchQueryService } from 'src/app/services/search-query.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  searchQuery: string = ''; 

  constructor(private matdialog:MatDialog , 
    private searchQueryService: SearchQueryService){

  }
  ngOnInit(): void {
    this.searchQueryService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });
  }

  items = [
    { id: '1', name: 'Batarang', description: 'A signature weapon.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '2', name: 'Grappling Gun', description: 'A tool for scaling buildings.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '3', name: 'Batman Car', description: 'A high-tech vehicle.', img: '../../../assets/img/ai-generated-7700259_1280.jpg'}
  ];

  get filteredGadgets() {
    return this.items.filter(gadget =>
      gadget.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      gadget.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
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