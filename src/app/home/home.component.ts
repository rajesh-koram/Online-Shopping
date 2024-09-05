import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AppmaterialModule } from '../appmaterial/appmaterial.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, AppmaterialModule, FormsModule, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  name: string = '';

  constructor(
    // private data :DataserviceService
  ) { }


  ngOnInit(): void {
    // this.data.currentMessage;
  }

}
