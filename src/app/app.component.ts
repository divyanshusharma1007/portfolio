/* The AppComponent class is the root component of the portfolio application in Angular. */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: ['node_modules/ngx-toastr/toastr.css'],
})
export class AppComponent {
  title = 'portfolio';
  // constructor(private toastr: ToastrService) {
  //   this.toastr.success('portfolio app is running!');
  //  }
}
