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

  destinations= [
    {name:"Assgard",
    description:"The realm of the Norse Gods with a new emphasis on tourist attractions!",
    imagePath:"https://i.pinimg.com/736x/21/3b/bf/213bbf59e1f007cb1493631a5c0456a9--sci-fi-city-space-illustration.jpg",
    id:1},
    {name:"New Disney",
    description:"The Mouse™ has taken to the stars and so should you! Enjoy Disney Corporation's new mega resort and amusement park on New Terra!",
    imagePath:"https://i.pinimg.com/originals/cb/d8/c1/cbd8c1efea89850c29ff9abab90c72ee.jpg",
    id:2},
    {name:"NiteNite City",
    description:"Want a 'no-kids-allowed' getaway? Come to NiteNite City for your not-so-relaxed adventures, where nobody knows what chill means!",
    imagePath:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec7d26b1-d557-47c1-a877-6050004d2fc2/dbb7hcs-1f9e8f0a-c4c7-4fc9-baf6-9e075ce86e30.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjN2QyNmIxLWQ1NTctNDdjMS1hODc3LTYwNTAwMDRkMmZjMlwvZGJiN2hjcy0xZjllOGYwYS1jNGM3LTRmYzktYmFmNi05ZTA3NWNlODZlMzAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-7-iEaeDDddcIw8RSKsKr7t8JpLF4DYv6ZQzuOVtQ28",
    id:3}]

Accomodations: Accomodations[] = [];

travelOptions: travelOptions[] = [];






  constructor() {




   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
