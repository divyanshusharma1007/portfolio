/* The AboutComponent class is a TypeScript class that represents a component in an Angular application
and contains a property for the website URL. */
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
    `
      span {
        font-weight: bold;
      }
      span:hover{
        color:gray;
      }
      span a{
        color:black;
        font-weight: normal;
      }
    `,
  ],
})
export class AboutComponent {
  website: string = window.location.host;
}
