import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutsModule } from './layouts/layouts.module';
// import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
