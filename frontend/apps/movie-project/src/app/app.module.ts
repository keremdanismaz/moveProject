import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AppComponent',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    component: MovieComponent
  },
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, MovieComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
