import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-body-content',
  standalone: true,
  imports: [SlickCarouselModule,
  NgFor],
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.css'
})


export class BodyContentComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void { }
  images = [
    {img: "https://www.india.gov.in/sites/upload_files/npi/files/ecisveep.jpg"},
    {img: "https://cbpssubscriber.mygov.in/assets/uploads/flYHd7E7b2W2XRtP?7"},
  ];

  slickConfig = {
    "infinite": true,
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": true
    };
}
