import {Component} from '@angular/core';

import {GoogleAnalyticsService} from '../../google-analytics.service';

@Component({
    selector: 'app-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    }

    track(link: string) {
        this.googleAnalyticsService
            .eventEmitter(link, 'menu', 'click', link, 1);
    }

}
