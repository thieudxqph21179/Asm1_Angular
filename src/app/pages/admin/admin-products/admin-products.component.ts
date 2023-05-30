import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  products: IProduct[]=[];
  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    },error=>{
      console.log(error.message)
    })
  }
  removeItem(id:any){
    this.productService.deleteProducts(id).subscribe(()=>{
      console.log("Xóa sp thành công")
    })
  }
}
