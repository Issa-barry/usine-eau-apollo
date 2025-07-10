import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup'; 

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
  

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
      FormsModule,
            CheckboxModule,
            DropdownModule,
            InputTextModule,
            InputNumberModule,
            ButtonModule,
            RippleModule,
            InputGroupModule,
            InputGroupAddonModule,
            ToastModule,
            ConfirmPopupModule,
            ConfirmDialogModule,
            MultiSelectModule
   ]
})
export class EditModule { }
