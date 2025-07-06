import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivraisonComponent } from './livraison.component';

const routes: Routes = [{ path: '', component: LivraisonComponent }, { path: 'new', loadChildren: () => import('./new/new.module').then(m => m.NewModule) }, { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }, { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutingModule { }
