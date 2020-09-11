import { Component } from '@angular/core';

import {GoogleAnalyticsService} from '../../google-analytics.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    }

    track(link: string) {
        this.googleAnalyticsService
            .eventEmitter(link, 'menu', 'click', link, 1);
    }

}
