import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageTitle } from 'src/app/shared/header/services/app-header';
import { AppSharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.html',
  styleUrls: ['./impressum.scss'],
  animations: [],
})
export class ImpressumComponent implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.settitle('Impresssum');
  }
}

const routes: Routes = [{ path: '', component: ImpressumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), AppSharedModule],
  exports: [RouterModule],
  declarations: [ImpressumComponent],
})
export class ImpressumgModule {}
