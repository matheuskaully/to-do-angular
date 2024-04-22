import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterOutlet,
    HomeModule,
    RouterModule,
  ],
  bootstrap: [
  ]
})
export class AppModule { }
