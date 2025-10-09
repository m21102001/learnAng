import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './contact/web/web.component';
import { MobileComponent } from './contact/mobile/mobile.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { PassDataComponent } from './pass-data/pass-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth/auth.module').then((module) => module.AuthModule) },
  { path: "productDetails/:id", canActivate: [authGuard], component: ProductDetailsComponent, title: 'productDetails' },
  { path: "home", canActivate: [authGuard], component: HomeComponent, title: 'home' },
  { path: "blog", component: BlogComponent, title: 'blog' },
  {
    path: "passData", component: PassDataComponent, title: 'passData', children: [
      { path: '', redirectTo: 'father', pathMatch: 'full' },
      { path: "father", component: FatherComponent, title: 'father' },
      { path: "son", component: SonComponent, title: 'son' },
    ]
  },
  {
    path: "contact", component: ContactComponent, title: 'contact', children: [
      { path: '', redirectTo: 'web', pathMatch: 'full' },
      { path: "web", component: WebComponent, title: 'web' },
      { path: "mobile", component: MobileComponent, title: 'mobile' },
    ]
  },
  { path: "about", component: AboutComponent, title: 'about' },
  { path: '**', component: NotFoundComponent, title: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
