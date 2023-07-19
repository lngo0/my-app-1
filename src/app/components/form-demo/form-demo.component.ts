import { Component, Input, Output, EventEmitter } from '@angular/core';

import { LoginForm } from 'src/app/LoginForm';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent {
  submitForm(Login: any) {
    console.log("form submitted,", Login)
  }
}
