import { Routes } from '@angular/router';
import { HomeComponent } from './Features/home/home.component';
import { ShopComponent } from './Features/shop/shop.component';
import { TestErrorComponent } from './Features/test-error/test-error.component';
import { CartComponent } from './Features/cart/cart.component';
import { ServerErrorComponent } from './Shared/server-error/server-error.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { CheckoutComponent } from './Features/checkout/checkout.component';
import { ProductDetailsComponent } from './Features/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'test-error', component: TestErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
