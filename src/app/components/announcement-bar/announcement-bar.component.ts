import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.css']
})
export class AnnouncementBarComponent {
  announcements: string[] = [
    "Free shipping on orders over $50!",
    "New collection available now!",
    "Sign up for our newsletter and get 10% off!"
  ];

  currencies = [
    { code: 'USD', flag: 'us', name: 'United States Dollar' },
    { code: 'EUR', flag: 'eu', name: 'Euro' },
    { code: 'GBP', flag: 'gb', name: 'British Pound' }
  ];

  selectedCurrency = this.currencies[0];

  constructor() {}
}
