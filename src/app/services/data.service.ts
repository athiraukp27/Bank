import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  db: any = {
    1000: { "acno": 1000, "username": "sharu", "password": "1234", "balance": 1000 },
    1001: { "acno": 1001, "username": "dev", "password": "1234", "balance": 1500 },
    1002: { "acno": 1002, "username": "sinto", "password": "1234", "balance": 5000 }

  }


  constructor() { }
  // login
  login(acno: any, pswd: any) {
    let db = this.db
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
this.currentuser=db[acno]["username"]
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user dosen't exist!!!!")

      return false
    }
  }

  // register
  register(acno: any, uname: any, pswd: any) {
    let db = this.db
    if (acno in db) {
      return false
    }
    else {
      // insert in db
      db[acno] = { acno, username: uname, password: pswd, "balance": 0 }
    }
    // disply db
    console.log(db);

    return true
  }
  deposit(acno: any, pswd: any, amount: any) {
    var amt=parseInt(amount)
    let db = this.db
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        db[acno]["balance"]+=amt
        return db[acno]["balance"]
      }

      else {
        alert("incorrect password!!!")
        return false
      }
    }
else{
  alert("check account no!!")
  return false
}
  }
  withdraw(acno: any, pswd: any, amount: any) {
    var amt=parseInt(amount)
    let db = this.db
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        db[acno]["balance"]-=amt
        return db[acno]["balance"]
      }

      else {
        alert("incorrect password!!!")
        return false
      }
    }
else{
  alert("check account no!!")
  return false
}
  }
  ngOnInit(): void {
  }

}



