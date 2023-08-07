import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.page.html',
  styleUrls: ['./bebe.page.scss'],
})
export class BebePage implements OnInit {
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
