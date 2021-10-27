import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { SideNavService } from './services/SidenavService';

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

  isExtraScreenSmall: Observable<boolean>;
  isScreenSmall: Observable<boolean>;
  pageheader: string = ''

  navigationItems = [
    { link: 'leistungen', label: 'navigation.services' },
    { link: 'kontakt', label: 'navigation.contact' },
    { link: 'datenschutz', label: 'navigation.privacy' },
    { link: 'impressum', label: 'navigation.imprint' },
  ]

  constructor(public router: Router, breakpoints: BreakpointObserver, private sideNavService: SideNavService) {

    this.isExtraScreenSmall = breakpoints
      .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint: { matches: any }) => breakpoint.matches));
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map((breakpoint) => breakpoint.matches));
  }

  ngOnInit() {
    this.router.events.pipe(mergeMap(event => { return this.isScreenSmall; })).subscribe(isSideNavVisible => { if (isSideNavVisible) { this.sidenav.close(); } });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sideNavService.setDrawer(this.sidenav)
    }, 0);
  }
}
