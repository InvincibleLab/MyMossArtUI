import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('collapsed => expanded', [
        animate('0.3s ease-out')
      ]),
      transition('expanded => collapsed', [
        animate('0.3s ease-in')
      ])
    ])
  ]

})
export class AboutComponent {
  expanded = false;

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
