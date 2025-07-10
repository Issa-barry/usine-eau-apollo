import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsEditComponent } from './achats-edit.component';

const routes: Routes = [{ path: '', component: AchatsEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsEditRoutingModule { }
