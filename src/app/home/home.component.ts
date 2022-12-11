import { Component, OnInit } from '@angular/core';
import {homePage} from '../content/homePage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content = homePage;
  constructor() { }

  ngOnInit(): void {
  }

}
