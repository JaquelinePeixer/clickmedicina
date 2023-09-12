import { TabsComponentModule } from './tabs/tabs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EyePasswordDirective } from './_directive/eye-password.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    EyePasswordDirective
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      mode: 'ios'
    }), 
    AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
