import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
 
const routes: Routes = [
    { path: '', component: ListeComponent, pathMatch: 'full' },
   
    {
        path: 'detail/:id',
        loadChildren: () =>
            import('./detail/detail.module').then((m) => m.DetailModule),
    },
    {
        path: 'liste',
        loadChildren: () => 
            import('./liste/liste.module').then((m) => m.ListeModule),
    },
    {
        path: 'edit/:id',
        loadChildren: () =>
            import('./edit/edit.module').then((m) => m.EditModule),
    }, 
    { path: 'new', loadChildren: () => import('./new/new.module').then(m => m.NewModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProduitRoutingModule {}
