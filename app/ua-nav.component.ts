import {Component, Input} from 'angular2/core';

@Component({
  selector: 'ua-nav',
  template: `<header>
    <button md-button class="md-icon-button md-primary">
      <i md-icon class="material-icons">menu</i>
    </button>
    <h1>{{title}}</h1>
  </header>`,
  styles: [`header { background-color: rgba(0,0,139,.83); margin: 0; padding: 10px; }
     h1 { font-size: 120%; display: inline; color: #D4BD87; }`]
})
export class UaNavComponent {
  @Input('myTitle') title:string;
}