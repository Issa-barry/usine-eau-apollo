import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
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
                        routerLink: ['/dashboard-banking']
                    },
                    {
                        label: 'Stat-RH',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/']
                    },
                    
                ]
            },
            {
                label: 'MENU',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Production',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Manutenssion',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['/apps/blog/list']
                            },
                            {
                                label: 'Packing',
                                icon: 'pi pi-fw pi-box',
                                routerLink: ['/apps/blog/detail']
                            },
                             
                        ]
                    },
                    {
                        label: 'Stock',
                        icon: 'pi pi-fw pi-database',
                        routerLink: ['/apps/calendar']
                    },
                    {
                        label: 'Livraison',
                        icon: 'pi pi-fw pi-truck',
                        routerLink: ['/apps/chat']
                    },
                     {
                        label: 'Facturation',
                        icon: 'pi pi-fw pi-credit-card',
                        routerLink: ['/apps/calendar']
                    },
                    
                ]
            },
              
            {
                label: 'Autre',
                icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Paramètres',
                        icon: 'pi pi-fw pi-cog',
                        url: ['/']
                    },
                    {
                        label: 'Déconnexion',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/documentation']
                    }
                ]
            }
        ];
    }
}
