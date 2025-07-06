import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';

const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'reception-liste', loadChildren: () => import('./reception/reception-liste/reception-liste.module').then(m => m.ReceptionListeModule) },
  { path: 'reception-new', loadChildren: () => import('./reception/reception-new/reception-new.module').then(m => m.ReceptionNewModule) },
  { path: 'reception-edit', loadChildren: () => import('./reception/reception-edit/reception-edit.module').then(m => m.ReceptionEditModule) },
  { path: 'reception-detail', loadChildren: () => import('./reception/reception-detail/reception-detail.module').then(m => m.ReceptionDetailModule) },
  { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
