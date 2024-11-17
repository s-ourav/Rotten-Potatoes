import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg=""
  constructor( private authservice : AuthserviceService , private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.trim().length == 0 || this.password.trim().length == 0){
      this.errorMsg="Please enter username and password";
    }
    else{
      this.errorMsg="";
      let res= this.authservice.login(this.username,this.password);
      if(res==200){
        this.router.navigate(['home']);
      }
      else{
        this.errorMsg="Invalid username or password";
      }
    }
  }
}
