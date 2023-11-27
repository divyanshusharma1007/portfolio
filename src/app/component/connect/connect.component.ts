/* The ConnectComponent class is an Angular component that handles sending emails using the
EmailService. */
import { Component } from '@angular/core';
import { EmailService } from 'src/app/email.service';
import { NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styles: [
  ]
})
export class ConnectComponent {

  formData: any = {};
  constructor(private emailService: EmailService,private toastr: ToastrService) { }
  sendEmail() {
    const data:any="";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email) || !this.formData.regards || !this.formData.name || !this.formData.message) {
      this.toastr.error("Please fill in all fields and in valid format ");
      return; // Stop execution if any field is empty
    }
    this.emailService.sendEmail(this.formData).then(response => {
      console.log(response)
      this.formData={}
    }).catch(e=> console.log(e));
   
  }
}
