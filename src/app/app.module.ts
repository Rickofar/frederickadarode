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
import { FooterComponent } from './components/partials/footer/footer.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { WebDevModalComponent } from './components/partials/web-dev-modal/web-dev-modal.component';
import { WebAppModalComponent } from './components/partials/web-app-modal/web-app-modal.component';
import { UxModalComponent } from './components/partials/ux-modal/ux-modal.component';
import { LyricsModalComponent } from './components/partials/lyrics-modal/lyrics-modal.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    GoToTopComponent,
    AboutComponent,
    DarkModeToggleComponent,
    PortfolioComponent,
    FooterComponent,
    ServicesComponent,
    WebDevModalComponent,
    WebAppModalComponent,
    UxModalComponent,
    LyricsModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
