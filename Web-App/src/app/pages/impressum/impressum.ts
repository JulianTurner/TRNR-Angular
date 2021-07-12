import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TranslocoService, TRANSLOCO_LOADING_TEMPLATE, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { filter, pluck } from 'rxjs/operators';
import { ComponentPageTitle } from 'src/app/shared/header/services/app-header';
import { AppSharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.html',
  styleUrls: ['./impressum.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'imprint'
    }
  ]
})
export class ImpressumComponent implements OnInit {
  constructor(
    public _componentPageTitle: ComponentPageTitle,
    public translocoService: TranslocoService
  ) {

  }

  ngOnInit(): void {
    this._componentPageTitle.setTitle('imprint.test');    
  }
}

const routes: Routes = [{ path: '', component: ImpressumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslocoModule, AppSharedModule],
  exports: [RouterModule],
  declarations: [ImpressumComponent],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'imprint' },
    
  ]
})
export class ImpressumgModule {}
