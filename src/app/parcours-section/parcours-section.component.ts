import {Component, OnInit} from '@angular/core';
import {Experience} from '../data/experience';
import {experiences} from '../data/exp';

@Component({
    selector: 'app-parcours-section',
    templateUrl: './parcours-section.component.html',
    styleUrls: ['./parcours-section.component.scss']
})
export class ParcoursSectionComponent implements OnInit {

    public experiences: Experience[] = experiences;

    constructor() {
    }

    ngOnInit(): void {
    }

}
