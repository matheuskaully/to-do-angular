import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    HomeModule,
    RouterModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
