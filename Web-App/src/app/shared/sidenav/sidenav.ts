import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SideNavService } from './servives/SidenavService';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
})
export class Sidenav {
  @ViewChild(MatSidenav)
  public sidenav!: MatDrawer;


  isScreenSmall: Observable<boolean>;
  pageheader: string = ''

  navigationItems = [
    { link: 'leistungen', label: 'navigation.services' },
    { link: 'kontakt', label: 'navigation.contact' },
    { link: 'datenschutz', label: 'navigation.privacy' },
    { link: 'impressum', label: 'navigation.imprint' },
  ]

  constructor(public router: Router, breakpoints: BreakpointObserver, private sideNavService: SideNavService) {

    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.sideNavService.sideNavToggleSubject.subscribe(() => {
        this.sidenav.toggle();
      });
    }, 0);
    setTimeout(() => {
      if (this.isScreenSmall) {
        this.sidenav.toggle();
      }
      ;
    }, 0);

  }
}
