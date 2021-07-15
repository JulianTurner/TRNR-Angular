import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TranslocoService, TRANSLOCO_LOADING_TEMPLATE, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { filter, pluck } from 'rxjs/operators';
import { AppSharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss'],
  providers: []
})
export class NotFoundComponent implements OnInit {
  constructor(
    public translocoService: TranslocoService
  ) {

  }

  ngOnInit(): void {
  }
}

const routes: Routes = [{ path: '', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslocoModule, AppSharedModule],
  exports: [RouterModule],
  declarations: [NotFoundComponent],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: '404' },
    
  ]
})
export class NotFoundModule {}
