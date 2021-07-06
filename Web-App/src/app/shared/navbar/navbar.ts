import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavBar {
firma: string = "TRNR"

navigationItems = [
  { link: 'leistungen', label: 'Leistungen' },
  { link: 'kontakt', label: 'Kontakt' },
  { link: 'datenschutz', label: 'Datenschutz' },
  { link: 'impressum', label: 'Impressum' },
];

  constructor(public router: Router) {

  }
  

}