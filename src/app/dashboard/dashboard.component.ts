import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  depositform = this.dsb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5),Validators.maxLength(5)]],
    pswd: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z "*]*')]],
    amount: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)]]
  })
  withdrawform = this.dsb.group({
  acno1: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(5),Validators.maxLength(5)]],
  pswd1: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z "*]*')]],
  amount1: ['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)]]
  })
  user:any
  constructor(private ds: DataService, private dsb: FormBuilder) { 
    this.user=this.ds.currentuser
  }

  deposit() {
    var acno = this.depositform.value.acno
    var pswd = this.depositform.value.pswd
    var amount = this.depositform.value.amount
    const result = this.ds.deposit(acno, pswd, amount)

    if(this.depositform.valid){
    if (result) {
      alert(amount + "deposited successfully... New balance is" + result)
    }
  }

else{
  alert('Invalid Form!')
}
  }
  withdraw() {
    var acno = this.withdrawform.value.acno1
    var pswd = this.withdrawform.value.pswd1
    var amount = this.withdrawform.value.amount1
    const result = this.ds.withdraw(acno, pswd, amount)
    if(this.withdrawform.valid){

    if (result) {
      alert(amount + "withdrawn successfully... New balance is" + result)
    }
  }
  else{
    alert('Invalid form!')
  }
  }
  ngOnInit(): void {
  }

}
