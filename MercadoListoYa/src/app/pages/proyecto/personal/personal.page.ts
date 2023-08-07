import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
