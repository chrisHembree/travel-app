import { Component, OnInit } from '@angular/core';
import { Accomodations } from './model.Accomodations';
import { Destination } from './model.destinations';
import { travelOptions } from './model.travelOptions';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

destinations: Destination[] = [new Destination("Assgard", "The realm of the Norse Gods with a new emphasis on tourist attractions",
"https://i.pinimg.com/736x/21/3b/bf/213bbf59e1f007cb1493631a5c0456a9--sci-fi-city-space-illustration.jpg", 1. )];

Accomodations: Accomodations[] = [];

travelOptions: travelOptions[] = [];


  constructor() {




   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
