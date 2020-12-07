import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  flag=false;
 name:string;
 email:string;
 photoUrl:string;
 submitted: boolean = false;
 updatepassword: FormGroup;
  constructor(private formbulider: FormBuilder,private router:Router,private myservice: MyserviceService) {
    this.updatepassword = this.formbulider.group(
      {

        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmpassword: ["", [Validators.required]]

      }
    )

   }

  ngOnInit(): void {
this.name=sessionStorage.getItem('name');
this.email=sessionStorage.getItem('email');
this.photoUrl=sessionStorage.getItem('photoUrl');
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.updatepassword)
    if (this.updatepassword.valid) {
      let user={
        email:sessionStorage.getItem('email'),
        password:this.updatepassword.value.password
    };
    console.log(user);

      this.myservice.updateUserPassword(user).subscribe((user) => {
       
      
        console.log(user);
        // console.log(user);
        if(user.flag==true)
        {
          this.submitted = false;
          this.updatepassword.reset();
         this.flag = true;     
        }
        // else
        // {
        //     this.invalid=true;
        // }
        //    this.spinner.show();
        //  this.users=this.myservice.getUser();
        //     setTimeout(() =>{
        //  this.spinner.hide();
        //                },1000)
      })
   
    }

  }

}
