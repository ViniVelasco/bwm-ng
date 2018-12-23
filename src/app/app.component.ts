import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = 'I am app component from component.ts';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  clickHandler() {
    alert("I AM CLICKED")
  }
}
