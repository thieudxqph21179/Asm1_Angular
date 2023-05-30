// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { IProduct } from 'src/app/interfaces/Product';
// import { ProductService } from 'src/app/services/product.service';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.scss']
// })
// export class EditProductComponent {
//   productForm = this.formBuilder.group({
//     name:['',[Validators.required,Validators.minLength(6)]],
//     price:[0],
//     img:['']
//   })
//   constructor(
//     private ProductService: ProductService,
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//   ){
//     this.route.paramMap.subscribe(param =>{
//       const id = Number(param.get('id'));
//       this.ProductService.getProductById(id).subscribe(product=>{
//         this.product = product;
//         this.productForm.patchValue
//       })
//     })
//   }
//   onHandleUpdate(){
//     if(this.productForm.valid){
//       const product:IProduct = {
//         name : this.productForm.value.name || "",
//         price : this.productForm.value.price || 0,
//         img : this.productForm.value.img || "",

//       }
//       this.ProductService.addProducts(product).subscribe(product=>{
//         console.log('THành công',product)
//       })
//     }
//   }
// }
