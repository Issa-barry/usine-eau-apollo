import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsListeComponent } from './achats-liste.component';

const routes: Routes = [{ path: '', component: AchatsListeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsListeRoutingModule { }
