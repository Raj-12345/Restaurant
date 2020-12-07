import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service'
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  invalid: boolean = false;
  submitted: boolean = false;
  resetpassword: FormGroup;
  flag = false;
  token;
  constructor(private activate: ActivatedRoute, private formbulider: FormBuilder, private router: Router, private myservice: MyserviceService) {
    this.resetpassword = this.formbulider.group(
      {
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmpassword: ["", [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    this.token = this.activate.snapshot.params.token;
  }
  onSubmit() {
    this.submitted = true;
    if (this.resetpassword.valid) {
    
      this.myservice.resetUserPassword(this.resetpassword.value, this.token).subscribe((status) => {
        console.log(status);
        this.flag = status.flag;
        this.resetpassword.reset();
        this.submitted=false;
      })
    }

  }
}

