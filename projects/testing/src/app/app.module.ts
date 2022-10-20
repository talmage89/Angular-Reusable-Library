// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// project imports
import { AppComponent } from './app.component';

// library imports
import { BigButtonModule } from 'buttons';
import { SmallButtonModule } from 'buttons';
import { NavbarModule } from 'buttons';
import { FooterModule } from 'buttons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BigButtonModule,
    SmallButtonModule,
    NavbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
