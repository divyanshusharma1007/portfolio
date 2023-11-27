/* The EmailService class is an Angular service that uses the emailjs-com library to send emails using
a specific service, template, and user ID. */
/* The line `import { Injectable } from '@angular/core';` is importing the `Injectable` decorator from
the `@angular/core` module. The `Injectable` decorator is used to mark a class as an injectable
service in Angular. */
import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly EMAILJS_SERVICE_ID = 'service_wkdi0ma';
  private readonly EMAILJS_TEMPLATE_ID = 'template_sw7me8p';
  private readonly EMAILJS_USER_ID = 'B3GottXODozB9vjdZ';

  constructor() {}

  sendEmail(data: any) {
    return emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      data,
      this.EMAILJS_USER_ID
    );
    
  }
}