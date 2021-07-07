import { transition, trigger, useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ComponentPageTitle } from 'src/app/shared/header/services/app-header';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.html',
  styleUrls: ['./impressum.scss'],
  animations: [],
})
export class ImpressumComponent implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle, private translate: TranslateService) {
    
  }

  ngOnInit(): void {
    this._componentPageTitle.setTitle('impressum.title');

  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}

const routes: Routes = [{ path: '', component: ImpressumComponent }];


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [RouterModule.forChild(routes),     
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    ,
      isolate: false
  }),AppSharedModule],
  exports: [RouterModule],
  declarations: [ImpressumComponent],
})
export class ImpressumgModule {

}

