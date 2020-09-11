import {Component} from '@angular/core';

import {GoogleAnalyticsService} from '../google-analytics.service';

@Component({
    selector: 'app-logo-animation',
    templateUrl: './logo-animation.component.html',
    styleUrls: ['./logo-animation.component.scss']
})
export class LogoAnimationComponent {

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    }

    track() {
        this.googleAnalyticsService
            .eventEmitter('scroll_to_home', 'scroll', 'home', 'home', 1);
    }

}
