import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  productList:Product[]=[];

  constructor(private productService: ProductService, private router: Router){
    
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
        this.router.navigate(['/login'])
      }
    })
  }


}
