import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageComponent } from './manage.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReversePipe } from './reverse.pipe';
import { LoginGuard } from '../services/login.guard';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([
      { path: "manage", component: ManageComponent, canActivate: [LoginGuard] }
    ])
  ],
  declarations: [ProductsComponent, CartitemsComponent, ManageComponent, ReversePipe],
  exports: [ProductsComponent, CartitemsComponent, ReversePipe]
})
export class ShoppingModule { }
