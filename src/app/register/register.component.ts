import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //formgroup
  registerform = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*'),Validators.maxLength(5),Validators.minLength(5)]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 *"]+')]]
  })
  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var acno = this.registerform.value.acno
    var uname = this.registerform.value.uname
    var pswd = this.registerform.value.pswd
    //form validation
    // console.log(this.registerform.valid);
    // uname error check logic
    // console.log(this.registerform.get('uname')?.errors);
    
// if(this.registerform.get('uname')?.errors){
//     alert("Invalid Username")
//     }
    
     if (this.registerform.valid) {
      const result = this.ds.register(acno, uname, pswd)
      if (result) {
        alert("registerd")
        this.router.navigateByUrl('')
      }
      else {
        alert("Already existing customer, Please Login!!!")
      }

    }
      else{
        alert('Invalid Form')
      }
  }
}
