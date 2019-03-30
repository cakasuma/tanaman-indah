import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  lat: number = -2.947540;
  lng: number = 104.763550;

  constructor() { }

  ngOnInit() {
    
  }

}
