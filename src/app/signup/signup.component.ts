import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../../assets/css/bootstrap.min.css',
    '../../assets/css/style.css', '../../assets/css/responsive.css', '../../assets/css/custom.css']
})
export class SignupComponent implements OnInit {
emailExists:boolean = false;
  submitted: boolean = false;
  signupform: FormGroup;
  constructor(private formbulider: FormBuilder,private router:Router,private myservice: MyserviceService) {
    this.signupform = this.formbulider.group(
      {
        name: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmpassword: ["", [Validators.required]],


      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupform)
    if (this.signupform.valid) {
      this.myservice.signUp(this.signupform.value).subscribe((user) => {
       
        this.submitted = false;
        console.log(user);
        if(user.flag==true)
        {
          this.router.navigate(['/login']);
        }
        else
        {
            this.emailExists=true;
        }
        //    this.spinner.show();
        //  this.users=this.myservice.getUser();
        //     setTimeout(() =>{
        //  this.spinner.hide();
        //                },1000)
      })
    }


  }
}


