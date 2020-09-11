import {Component} from '@angular/core';
import {GoogleAnalyticsService} from '../google-analytics.service';


@Component({
    selector: 'app-home-section',
    templateUrl: './home-section.component.html',
    styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent {

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    }

    track() {
        this.googleAnalyticsService
            .eventEmitter('scroll_to_me', 'scroll', 'me', 'me', 1);
    }

}
