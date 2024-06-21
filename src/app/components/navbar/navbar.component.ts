import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface Product {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchControl = new FormControl('');
  products: Product[] = [];
  filteredProducts: Product[] = [];
  showSuggestions = true; // Flag to show/hide suggestions

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value && value.length > 0) {
        this.showSuggestions = true;
        this.filteredProducts = this.filterProducts(value);
      } else {
        this.filteredProducts = [];
        this.showSuggestions = false;
      }
    });
  }

  loadProducts(): void {
    this.http.get<Product[]>('assets/stub/product-data.json').subscribe(data => {
      this.products = data;
    });
  }

  filterProducts(searchTerm: string): Product[] {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onSearch(): void {
    const value = this.searchControl.value ?? '';
    if (value && value.length > 0) {
      this.filteredProducts = this.filterProducts(value);
      this.showSuggestions = true;
    } else {
      this.filteredProducts = [];
      this.showSuggestions = false;
    }
  }

  selectSuggestion(suggestion: string): void {
    this.searchControl.setValue(suggestion);
    this.filteredProducts = [];
    this.showSuggestions = false; // Hide suggestions after selecting one
  }

  collapseNavbar(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
    
    if (navbarToggler && navbarCollapse) {
      navbarToggler.click(); // Simulate a click event on the toggler button
    }
  }

}
