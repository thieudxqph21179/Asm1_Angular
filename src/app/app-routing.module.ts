import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
// import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
 {path:"admin",component:AdminLayoutComponent,children:[
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:AdminProductsComponent},
  {path:"products/add",component:AddProductComponent},
  // {path:"products/:id/edit",component:EditProductComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
