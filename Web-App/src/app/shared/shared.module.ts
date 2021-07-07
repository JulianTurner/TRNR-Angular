import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppFooter } from './footer/footer';
import { PageHeader } from './header/app-header';
import { ComponentPageTitle } from './header/services/app-header';
import { NavBar } from './navbar/navbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { StyleManager } from './style-manager';
import { ThemeStorage } from './theme-picker/theme-storage/theme-storage';
import { LanguageStorage } from './language-picker/language-storage/language-storage';

import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemePicker } from './theme-picker';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../routes';
import { CookiePopup } from './cookie-popup/cookie-popup';
import { Sidenav } from './sidenav/sidenav';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguagePicker } from './language-picker';
import { MatSelectModule } from '@angular/material/select';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    NavBar,
    PageHeader,
    AppFooter,
    ThemePicker,
    CookiePopup,
    Sidenav,
    LanguagePicker,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    MatSelectModule,
  ],
  exports: [NavBar, PageHeader, AppFooter, CookiePopup, Sidenav],
  providers: [
    ComponentPageTitle,
    MatNativeDateModule,
    StyleManager,
    ThemeStorage,
    LanguageStorage,
  ],
})
export class AppSharedModule {
  /**
   *
   */
  constructor() {}
}
