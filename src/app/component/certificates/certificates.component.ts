/* The `CertificatesComponent` class is a component in an Angular application that holds an array of
certificate objects with properties such as title, imageUrl, and description. */
/* The code you provided is a test suite for the `CertificatesComponent` in an Angular application. */
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styles: [
  ]
})
export class CertificatesComponent {
  certificates:any = [
    {
      title: 'Certificate 1',
      imageUrl: 'assets/certificate1.jpg',
      description: 'Description for Certificate 1.'
    },
    {
      title: 'Certificate 2',
      imageUrl: 'assets/certificate2.jpg',
      description: 'Description for Certificate 2.'
    },
    // Add similar objects for the other certificates
  ];
}
