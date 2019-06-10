import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AltComponent } from './pages/portfolio/alt/alt.component';
import { RawComponent } from './pages/portfolio/raw/raw.component';
import { MansoryComponent } from './pages/portfolio/mansory/mansory.component';
import { FlexComponent } from './pages/portfolio/flex/flex.component';
import { CategoriesComponent } from './shared/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    AltComponent,
    RawComponent,
    MansoryComponent,
    FlexComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
