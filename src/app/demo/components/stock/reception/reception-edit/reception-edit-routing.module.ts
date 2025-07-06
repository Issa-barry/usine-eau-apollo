import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionEditComponent } from './reception-edit.component';

const routes: Routes = [{ path: '', component: ReceptionEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionEditRoutingModule { }
