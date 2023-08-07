import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.page.html',
  styleUrls: ['./carnes.page.scss'],
})
export class CarnesPage implements OnInit {

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
