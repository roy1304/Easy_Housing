import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerLoginComponent } from './buyer-login/buyer-login.component';
import { BuyerRegisterComponent } from './buyer-register/buyer-register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {path:'buyer',component:BuyerComponent},
  {path:'buyer-login',component:BuyerLoginComponent},
  {path:'buyer-register',component:BuyerRegisterComponent},
  {path:'seller',component:SellerComponent},
  {path:'seller-login',component:SellerLoginComponent},
  {path:'seller-register',component:SellerRegisterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BuyerComponent,SellerComponent,BuyerLoginComponent,BuyerRegisterComponent,SellerLoginComponent,SellerRegisterComponent]


