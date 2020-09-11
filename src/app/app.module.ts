import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogoAnimationComponent} from './logo-animation/logo-animation.component';
import {HomeSectionComponent} from './home-section/home-section.component';
import {MeSectionComponent} from './me-section/me-section.component';
import {ParcoursSectionComponent} from './parcours-section/parcours-section.component';
import {ExperienceComponent} from './parcours-section/experience/experience.component';
import {MenuButtonComponent} from './ui/menu-button/menu-button.component';
import {LinksComponent} from './ui/links/links.component';
import {SmoothScrollToDirective} from './smooth-scroll.directive';
import {BackgroundStarsComponent} from './ui/background-stars/background-stars.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
        LogoAnimationComponent,
        HomeSectionComponent,
        MeSectionComponent,
        ParcoursSectionComponent,
        ExperienceComponent,
        MenuButtonComponent,
        LinksComponent,
        SmoothScrollToDirective,
        BackgroundStarsComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
