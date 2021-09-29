import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { SideNavService } from 'src/app/shared/sidenav/services/SidenavService';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss'],
  animations: [],
})
export class LandingComponent implements OnInit {
  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
    //this._componentPageTitle.setTitle('TRNR');
  }


  toggleSideNav() {
    this.sideNavService.toggle();
  }
}

const routes: Routes = [{ path: '', component: LandingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), AppSharedModule, MatButtonModule],
  exports: [RouterModule],
  declarations: [LandingComponent],
})
export class LandingModule { }
