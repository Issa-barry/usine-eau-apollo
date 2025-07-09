import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-liste',
  // standalone: true,
  // imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent implements OnInit {

  
      products: Product[] = [];
  
      sortOptions: SelectItem[] = [];
  
      sortOrder: number = 0;
  
      sortField: string = '';
  
      sourceCities: any[] = [];
  
      targetCities: any[] = [];
  
      orderCities: any[] = [];
  
      constructor(private productService: ProductService, private router: Router) { }
  
      ngOnInit() {
          this.productService.getProducts().then(data => this.products = data);
  
          this.sourceCities = [
              { name: 'San Francisco', code: 'SF' },
              { name: 'London', code: 'LDN' },
              { name: 'Paris', code: 'PRS' },
              { name: 'Istanbul', code: 'IST' },
              { name: 'Berlin', code: 'BRL' },
              { name: 'Barcelona', code: 'BRC' },
              { name: 'Rome', code: 'RM' }];
  
          this.targetCities = [];
  
          this.orderCities = [
              { name: 'San Francisco', code: 'SF' },
              { name: 'London', code: 'LDN' },
              { name: 'Paris', code: 'PRS' },
              { name: 'Istanbul', code: 'IST' },
              { name: 'Berlin', code: 'BRL' },
              { name: 'Barcelona', code: 'BRC' },
              { name: 'Rome', code: 'RM' }];
  
          this.sortOptions = [
              { label: 'Price High to Low', value: '!price' },
              { label: 'Price Low to High', value: 'price' }
          ];
      }
  
      onSortChange(event: any) {
          const value = event.value;
  
          if (value.indexOf('!') === 0) {
              this.sortOrder = -1;
              this.sortField = value.substring(1, value.length);
          } else {
              this.sortOrder = 1;
              this.sortField = value;
          }
      }
  
      onFilter(dv: DataView, event: Event) {
          dv.filter((event.target as HTMLInputElement).value);
      }


      //toobal
 
    product: Product = {};
     productDialog: boolean = false; 
       submitted: boolean = false;
       openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    goTonewProduit() {
        this.router.navigate(['/stock/produit/new']);
    }

    onGoToProductEdit(product: Product) {
        this.router.navigate(['/stock/produit/edit', product.id]);
    }

    onGoProductDetail(product: Product) {
        this.router.navigate(['/stock/produit', product.id]);
    }

}
