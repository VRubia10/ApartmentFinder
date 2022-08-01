import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppdetailsPage } from './appdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AppdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppdetailsPageRoutingModule {}
