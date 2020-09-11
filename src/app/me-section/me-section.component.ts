import { Component, OnInit } from '@angular/core';
declare var Rellax: any;

@Component({
  selector: 'app-me-section',
  templateUrl: './me-section.component.html',
  styleUrls: ['./me-section.component.scss']
})
export class MeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      const rellax = new Rellax('.rellax', {
          center: true,
          wrapper: document.querySelector('.Layout__main') // or '.Layout__main'
      });
  }

}
