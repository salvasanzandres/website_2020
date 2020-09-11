import {Component, Input} from '@angular/core';

import {Experience} from '../../data/experience';
import {GoogleAnalyticsService} from '../../google-analytics.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {

    @Input() experience: Experience;
    seeMore = false;

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    }

    toggleSeeMore(experience: string) {
        this.seeMore = !this.seeMore;
        if (this.seeMore) {
            this.googleAnalyticsService
                .eventEmitter(experience.replace(/\s/g, ''),
                    'exp', experience.replace(/\s/g, '_'), 'toggle', 1);
        }
    }

}
