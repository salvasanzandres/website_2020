import {Component, OnInit} from '@angular/core';

declare let AOS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    ngOnInit() {
        setTimeout(() => {
            AOS.init();
        }, 500);

    }


}
