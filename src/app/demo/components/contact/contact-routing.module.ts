import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListeComponent } from './contact-liste/contact-liste.component';

const routes: Routes = [
    { path: '', component: ContactListeComponent },
    {
        path: 'new',
        loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
    },
    {
        path: 'detail',
        loadChildren: () =>
            import('./detail/detail.module').then((m) => m.DetailModule),
    },
    {
        path: 'edit',
        loadChildren: () =>
            import('./edit/edit.module').then((m) => m.EditModule),
    },
    {
        path: 'contact-liste',
        loadChildren: () =>
            import('./contact-liste/contact-liste.module').then(
                (m) => m.ContactListeModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
