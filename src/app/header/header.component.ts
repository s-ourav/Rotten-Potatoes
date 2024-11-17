import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private authservice : AuthserviceService) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['home'])
  }
  logout(){
    this.authservice.logout();
  }
}
