import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppmaterialModule } from './appmaterial/appmaterial.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppmaterialModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Online shopping Project';
  searchValue: any;
  wishlist: any = [];
  cart: any;

  isUserAuthenticated: any;

  constructor(
    // private route: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit() {

    // this.usersub=this.LoginService.user.subscribe(user => {
    // this.isUserAuthenticated = !user ? false : true; 
    //  this.user=user;});

    // this.data.currentMessage.subscribe(username => this.username = username)
  }

  onSearch() { }

  logOut() { }
}