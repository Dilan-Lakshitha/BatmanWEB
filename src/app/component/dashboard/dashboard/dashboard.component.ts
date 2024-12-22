import { Component } from '@angular/core';
import { SearchQueryService } from 'src/app/services/search-query.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  searchQuery: string = '';
  filteredItems: any[] = [];

  items = [
    { id: '1', name: 'Batarang', description: 'A signature weapon.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '2', name: 'Grappling Gun', description: 'A tool for scaling buildings.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' },
    { id: '3', name: 'Batman Car', description: 'A high-tech vehicle.', img: '../../../assets/img/ai-generated-7700259_1280.jpg' }
  ];

  constructor(private searchQueryService: SearchQueryService) {}

  ngOnInit(): void {
    this.searchQueryService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.filterItems();
    });
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
