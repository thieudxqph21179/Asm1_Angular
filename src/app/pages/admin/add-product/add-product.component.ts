import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(6)]],
    price:[0],
    img:['']
  })
  constructor(
    private ProductService: ProductService,
    private formBuilder: FormBuilder,
    private router : Router
  ){}
  onHandleSubmit(){
    if(this.productForm.valid){
      const product:IProduct = {
        name : this.productForm.value.name || "",
        price : this.productForm.value.price || 0,
        img : this.productForm.value.img || "",

      }
      this.ProductService.addProducts(product).subscribe(product=>{
        console.log('THành công',product)
        this.router.navigate(['admin'])
      })
    }
  }
}
