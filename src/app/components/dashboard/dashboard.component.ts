import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  productList:Product[]=[];

  constructor(private productService: ProductService){
    
  }
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result) => {
        console.log(result);
        this.productList = result
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
