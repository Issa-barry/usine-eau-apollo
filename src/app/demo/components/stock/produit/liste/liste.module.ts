import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ListeRoutingModule } from './liste-routing.module';
import { ListeComponent } from './liste.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [ListeComponent],
    imports: [
        CommonModule,
        ListeRoutingModule,
        FormsModule,
        DataViewModule,
        PickListModule,
        OrderListModule,
        InputTextModule,
        DropdownModule,
        RatingModule,
        ButtonModule,
        ToolbarModule,
    ],
})
export class ListeModule {}
