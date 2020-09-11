import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursSectionComponent } from './parcours-section.component';

describe('ParcoursSectionComponent', () => {
  let component: ParcoursSectionComponent;
  let fixture: ComponentFixture<ParcoursSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
