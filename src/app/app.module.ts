import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// configuracion del local de la app
import localeEsCR from '@angular/common/locales/es-CR';
import localeFrCA from "@angular/common/locales/fr-CA";

registerLocaleData(localeEsCR)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
