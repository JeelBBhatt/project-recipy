import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'red',
        transform: 'translateX(120px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'red',
        transform: 'translateX(120px) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])


    ])
  ]
})
export class AppComponent {
  state = 'normal';
  onAnimation() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal' ;
  }
  onShrink() {
    this.state= 'shrunken';
  }
}
