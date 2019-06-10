import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FlexComponent } from './pages/portfolio/flex/flex.component';
import { AltComponent } from './pages/portfolio/alt/alt.component';
import { RawComponent } from './pages/portfolio/raw/raw.component';
import { MansoryComponent } from './pages/portfolio/mansory/mansory.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'portfolio', component: FlexComponent},
  { path: 'portfolio/flex', component: FlexComponent},
  { path: 'portfolio/alt', component: AltComponent},
  { path: 'portfolio/raw', component: RawComponent},
  { path: 'portfolio/mansory', component: MansoryComponent},

  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
