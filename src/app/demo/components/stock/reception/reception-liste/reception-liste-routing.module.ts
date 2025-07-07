import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionListeComponent } from './reception-liste.component';

const routes: Routes = [{ path: '', component: ReceptionListeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionListeRoutingModule { }
