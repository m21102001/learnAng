import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponent } from './contact/web/web.component';
import { MobileComponent } from './contact/mobile/mobile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { PassDataComponent } from './pass-data/pass-data.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    WebComponent,
    MobileComponent,
    ParentComponent,
    ChildComponent,
    FatherComponent,
    SonComponent,
    PassDataComponent,
    DemoComponent,
    LoginComponent,
    RegisterComponent,
    TruncatePipe,
    SearchPipe,
    ProductDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
