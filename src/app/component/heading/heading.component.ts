/* The HeadingComponent is an Angular component that takes an input string and displays it as a heading
in the template. */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styles: [],
})
export class HeadingComponent {
  @Input() heading:string=""
}
