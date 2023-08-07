import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

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
