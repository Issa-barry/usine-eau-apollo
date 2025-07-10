import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboards',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Stat-Vente',
                        icon: 'pi pi-fw pi-chart-line',
                        routerLink: ['/dashboard-banking'],
                    },
                    {
                        label: 'Stat-RH',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'MENU',
                icon: 'pi pi-th-large',
                items: [
                    // {
                    //     label: 'Produits',
                    //     icon: 'pi pi-fw pi-plus',
                    //     items: [
                    //         {
                    //             label: 'Vente',
                    //             icon: 'pi pi-fw pi-calculator',
                    //             routerLink: ['pages/crud']
                    //         },
                    //         {
                    //             label: 'Achat',
                    //             icon: 'pi pi-fw pi-cart-plus',
                    //             routerLink: ['ecommerce/product-overview']
                    //         },

                    //     ]
                    // },
                    {
                        label: 'Ventes',
                        icon: 'pi pi-fw pi-calculator',
                        routerLink: ['/ventes'],
                    },
                    {
                        label: 'Achats',
                        icon: 'pi pi-fw pi-cart-plus',
                        routerLink: ['/achats'],
                    },
                    {
                        label: 'Packing',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/packing'],
                    },
                    {
                        label: 'Stock',
                        icon: 'pi pi-fw pi-database',
                        routerLink: ['/stock'],
                    },
                    {
                        label: 'Livraison',
                        icon: 'pi pi-fw pi-truck',
                        routerLink: ['/livraison'],
                    },
                    {
                        label: 'Facturation',
                        icon: 'pi pi-fw pi-credit-card',
                        routerLink: ['/facturation'],
                    },
                    {
                        label: 'Contact',
                        icon: 'pi pi-fw pi-credit-card',
                        routerLink: ['/contact'],
                    },
                ],
            },

            // {
            //     label: 'Contact',
            //     icon: 'pi pi-fw pi-download',
            //     items: [
            //         {
            //             label: 'Clients',
            //             icon: 'pi pi-fw pi-users',
            //             url: ['/'],
            //         },
            //         {
            //             label: 'Employés',
            //             icon: 'pi pi-fw pi-id-card',
            //             routerLink: ['/documentation'],
            //         },
            //     ],
            // },
        ];
    }
}
