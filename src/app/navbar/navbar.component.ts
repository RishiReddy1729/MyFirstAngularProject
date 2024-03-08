import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void { }
  homepage(){
    this.router.navigate(['/body-content']);
  }
  goToLogin(){
      this.router.navigate(['/login']);
    }
  goToSignup(){
      this.router.navigate(['/sign-up']);
    }
  
}

