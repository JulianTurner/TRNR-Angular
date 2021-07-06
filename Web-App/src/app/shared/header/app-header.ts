import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponentPageTitle } from './services/app-header';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.html',
  styleUrls: ['./app-header.scss'],
})
export class PageHeader {
  constructor(public componentPageTitle: ComponentPageTitle, public title: Title) {
    
  }

  @Output() toggleSidenav = new EventEmitter<void>();

}
