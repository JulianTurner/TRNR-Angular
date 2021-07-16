import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import {
  TranslocoModule,
  TranslocoService,
  TRANSLOCO_LOADING_TEMPLATE,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { filter, pluck } from 'rxjs/operators';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { Sidenav } from 'src/app/shared/sidenav/sidenav';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss'],
  providers: [],
})


export class ImprintComponent implements OnInit {
  constructor(public translocoService: TranslocoService) {
  }

  ngOnInit(): void {
  }
}

const routes: Routes = [{ path: '', component: ImprintComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslocoModule, AppSharedModule],
  exports: [RouterModule],
  declarations: [ImprintComponent],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'imprint' }],
})
export class ImprintModule {}
