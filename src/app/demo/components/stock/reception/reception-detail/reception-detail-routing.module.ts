import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionDetailComponent } from './reception-detail.component';

const routes: Routes = [{ path: '', component: ReceptionDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionDetailRoutingModule { }
