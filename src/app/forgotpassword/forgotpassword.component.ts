import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css','../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css', '../../assets/css/responsive.css', '../../assets/css/custom.css']
})
export class ForgotpasswordComponent implements OnInit {
  invalid:boolean=false;
  submitted: boolean = false;
  forgotpassword: FormGroup;
flag=false;
  constructor(private formbulider: FormBuilder,private router:Router,private myservice: MyserviceService) {
    this.forgotpassword = this.formbulider.group(
      {

        email: ["", [Validators.required, Validators.email]],

      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.forgotpassword)
    if (this.forgotpassword.valid) {
      console.log(this.forgotpassword.value);
       this.myservice.sendEmail(this.forgotpassword.value).subscribe((status) =>
       { 
           console.log(status);
           this.flag=status.flag;

       })
      }
  }
}
