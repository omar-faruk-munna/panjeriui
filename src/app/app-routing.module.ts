import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "", component: MyCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
