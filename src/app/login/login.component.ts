import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


loginform=this.lg.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5),Validators.maxLength(5)]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z "*]*')]]
})
  
  constructor(private router:Router,private ds:DataService, private lg:FormBuilder) { }
  // acnochange(event:any){
// this.acno=event.target.value;
// console.log(this.acno);

  // }
  // pswdchange(event:any)
  // {
  //   this.pswd=event.target.value
  // }
  login(){
    var acno=this.loginform.value.acno
    var pswd=this.loginform.value.pswd
   const result= this.ds.login(acno,pswd)
   if(this.loginform.valid){
  if(result){
      this.router.navigateByUrl("dashboard")
    }
  
   }
   else{
    alert('Invalid form!')
   }
  }
 
    ngOnInit(): void {
    }
  
  }
  
  //template referencing variable

// login(a:any,p:any){
//   console.log(a.value);
  
//   var acno=a.value
//   var pswd=p.val
//   var db=this.db
// if(acno in db){
//   if(pswd==db[acno]["password"]){
//     alert("login succesfull")
//   }
//   else{
// alert("incorrect password")
//   }
//  }
// else{
//   alert("account doesnt exist")
// }
// }
//   ngOnInit(): void {
//   }

// }  
