import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppdetailsPageRoutingModule } from './appdetails-routing.module';

import { AppdetailsPage } from './appdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppdetailsPageRoutingModule
  ],
  declarations: [AppdetailsPage]
})
export class AppdetailsPageModule {}
