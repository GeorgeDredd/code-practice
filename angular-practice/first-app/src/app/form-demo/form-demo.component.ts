import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent {
  submit(Login: any) {
    console.log("Form submitted", Login)
  }

  defaultCountry = 'Gambia';
  fname!: string;
  lname!: string;
  workemail!: string;


  faCoffee = faCoffee;

  
}
