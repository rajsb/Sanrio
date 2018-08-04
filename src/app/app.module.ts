import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { AboutComponent, CartComponent, NotFoundComponent, SignInComponent, SignUpComponent, ErrorComponent, SignOutComponent } from './routes.components';
import { RouterModule } from '@angular/router'
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http'
import { LoginService } from './services/login.service';
import { LoginGuard } from './services/login.guard';

//Route Mapping: Associate path with component
let appRoutes = [
    { path: "", component: AboutComponent },
    { path: "cart", component: CartComponent },
    { path: "signIn", component: SignInComponent },
    { path: "signUp", component: SignUpComponent },
    { path: "signOut", component: SignOutComponent },
    { path: "error", component: ErrorComponent },
    { path: "**", component: NotFoundComponent },
]

@NgModule({
    //Register Component
    declarations: [AppComponent, AboutComponent, CartComponent, NotFoundComponent, SignInComponent, SignUpComponent, ErrorComponent, SignOutComponent],
    //specify startup component
    bootstrap: [AppComponent],
    //specify module dependencies
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true }), SharedModule, ShoppingModule, HttpClientModule],
    //Register Service
    providers: [ProductService, CartService, LoginService, LoginGuard]

})
export class AppModule { }