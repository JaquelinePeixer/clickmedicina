import { TabsComponent } from './tabs.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent,
  ]
})
export class TabsComponentModule { }

