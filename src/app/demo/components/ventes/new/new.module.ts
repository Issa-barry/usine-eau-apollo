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
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
    declarations: [NewComponent],
    imports: [
        CommonModule,
        NewRoutingModule,
        FormsModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        InputNumberModule,
        ButtonModule,
        RippleModule,
        InputGroupModule,
        InputGroupAddonModule,
        MultiSelectModule,
    ],
})
export class NewModule {}
