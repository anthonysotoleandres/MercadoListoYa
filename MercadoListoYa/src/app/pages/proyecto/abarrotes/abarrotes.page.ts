import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abarrotes',
  templateUrl: './abarrotes.page.html',
  styleUrls: ['./abarrotes.page.scss'],
})
export class AbarrotesPage implements OnInit {
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
