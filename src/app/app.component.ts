import { Component } from '@angular/core';
import { SearchQueryService } from './services/search-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BatmanWEB';
  searchQuery = '';

  constructor(private searchQueryService: SearchQueryService) {}

  onSearch(query: string) {
    this.searchQuery = query;
    this.searchQueryService.setSearchQuery(query);
  }
}
