import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatsNewComponent } from './achats-new.component';

const routes: Routes = [{ path: '', component: AchatsNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchatsNewRoutingModule { }
