import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
})
export class Sidenav {

  isExtraScreenSmall: Observable<boolean>;
  isScreenSmall: Observable<boolean>;
  pageheader: string = ''

  navigationItems = [
    { link: 'leistungen', label: 'services' },
    { link: 'kontakt', label: 'contact' },
    { link: 'datenschutz', label: 'privacy' },
    { link: 'impressum', label: 'imprint' },
  ]

  constructor(public router: Router, breakpoints: BreakpointObserver) {
    this.isExtraScreenSmall = breakpoints
      .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint: { matches: any }) => breakpoint.matches));
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
  }

  toggleSidenav(sidenav: MatSidenav): Promise<MatDrawerToggleResult> {
    console.log("toggle")
    return sidenav.toggle();
  }

  
}
