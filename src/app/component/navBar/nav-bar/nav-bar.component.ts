import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() search = new EventEmitter<string>();
  isDarkMode = false;
  searchQuery = '';

  ngOnInit() {
    // Check localStorage for dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    this.isDarkMode = darkMode === 'true';

    // Apply the stored theme setting
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }

  // Toggle Dark Mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the user's dark mode preference to localStorage
    localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
  }

  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;  // Update searchQuery
    this.search.emit(this.searchQuery);  // Emit to parent
  }
}
