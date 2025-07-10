import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsDetailComponent } from './achats-detail.component';

const routes: Routes = [{ path: '', component: AchatsDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsDetailRoutingModule { }
