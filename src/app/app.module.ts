import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GoToTopComponent } from './components/partials/go-to-top/go-to-top.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DarkModeToggleComponent } from './components/partials/theme/toggle-theme';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GoToTopComponent,
    AboutComponent,
    DarkModeToggleComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
