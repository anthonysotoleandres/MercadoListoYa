import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.page.html',
  styleUrls: ['./hogar.page.scss'],
})
export class HogarPage implements OnInit {
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
