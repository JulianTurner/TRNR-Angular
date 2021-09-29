import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from '../sidenav/servives/SidenavService';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavBar {
  firma: string = "TRNR"

  constructor(public router: Router, private sideNavService: SideNavService) {

  }

  toggleSidenav() {
    this.sideNavService.toggle();
  }

}