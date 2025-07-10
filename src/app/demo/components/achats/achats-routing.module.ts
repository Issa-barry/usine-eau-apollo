import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsListeComponent } from './achats-liste/achats-liste.component';

const routes: Routes = [{ path: '', component: AchatsListeComponent }, 
  { path: 'achats-liste', loadChildren: () => import('./achats-liste/achats-liste.module').then(m => m.AchatsListeModule) }, 
  { path: 'achats-new', loadChildren: () => import('./achats-new/achats-new.module').then(m => m.AchatsNewModule) }, 
  { path: 'achats-detail', loadChildren: () => import('./achats-detail/achats-detail.module').then(m => m.AchatsDetailModule) }, 
  { path: 'achats-edit', loadChildren: () => import('./achats-edit/achats-edit.module').then(m => m.AchatsEditModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsRoutingModule { }
