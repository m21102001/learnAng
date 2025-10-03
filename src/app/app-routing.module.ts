import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './contact/web/web.component';
import { MobileComponent } from './contact/mobile/mobile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "blog", component: BlogComponent, title: 'blog' },
  { path: "home", component: HomeComponent, title: 'home' },
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
