import { Component, OnInit } from '@angular/core';
import { Accommodation } from './model.accommodation';
import { Destination } from './model.destinations';
import { travelOptions } from './model.travelOptions';
import { MatStepperModule } from '@angular/material/stepper';
import { ContentserviceService } from '../contentservice.service';



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


travelOptions= [
  {name: "The Space Bus", description: "The perfect transportation for those who don't want budgetary contraints to keep you from exploring the cosmos! Destinations involving more than 1 month travel time inadvisable.",
imagePath: "https://ak3.picdn.net/shutterstock/videos/24144673/thumb/1.jpg", id: 1 , price: 2500},


{name: "The Space Extra Fat Falcon", description: "The Fat Falcon has all the amenities you've come to expect from SpaceExtra's luxury travel department! Our most popular travel selection!",
imagePath: "https://i.pinimg.com/originals/a7/3e/d1/a73ed1e3d3ba5f1f3c570ad88fe92301.jpg", id: 2, price: 25000},


{name: "The Founders Choice", description: "You have the means. You've worked hard. What reason could there be not to choose the favorite luxury travel selection of our late founder, Elon Musk? The Champagne is already prepped and waiting for you. :)",
imagePath: "https://i.pinimg.com/originals/41/1c/50/411c5013ebaa6ca4f0995107d4ccff78.jpg", id: 3, price: 100000}
];



assgardAccommodations= [
  // assgardAccommodations
  {name: "floki's hovel", description: "Have you ever wondered how the peasants among the norse gods lived? No more! Floki's hovel offers all the rustic charm of a peasant in Assgard!",
imagePath: "https://i.pinimg.com/736x/5f/9a/7f/5f9a7f374f2083d6c94a652e80d585de.jpg", id: 1, price: 10000,},


{name: "Odin's palace", description: "To drink with the heroes of legend while being waited on by Valkyries, to raise a horn to the Allfather, THAT is what is best in life! The highest rated accommodation on record",
imagePath: "https://staticdelivery.nexusmods.com/images/110/3587738-1423249901.jpg", id: 2, price: 500000,},
];


newDisneyAccomodations=[
  // newdisney accommodations

  {name: "New Disney Motel", description: "Traveling on a budget? Need a low cost way to experience New Disney? The NewDisney Motel has you covered! No expensive trademarks, few amenities, but just enough charm!",
  imagePath: "https://th.bing.com/th?id=OIF.Ul37mG%2b765zP9ziTBeNsgw&pid=ImgDet&rs=1", id: 3, price: 2000},


  {name:"The Mouse Suites", description: "Positioned in the top of the spire of the New Disney castle and with your own cartoon butler and fairy godmother, magic has finally made it to the new frontiers of space!",
  imagePath: "https://c2.staticflickr.com/6/5055/5392597311_b8b8de9210_b.jpg", id: 4, price: 45000},

];



niteNiteCityAccomodations=[
  // nitenitecity accommodations

  {name: "The No-tell Motel", description: "As long as you're not asking what the sounds coming from the other rooms are, No one is asking you why you're booking an an hourly room under a pseudonym! Enjoy! or don't, if that's your thing.",
  imagePath: "https://thumb.sfmlab.com/item-preview/projectfile/No_Tell_Hotel_Room_03_thumb.detail.png", id: 5, price: 3000},


  {name:"The Flat", description: "The mystique of this room is not lost on its occupants. No one leaves the same as they entered. Deals are done. Love is discovered. The lust for life, once lost to the myriad banalities of life, is invariably rekindled. It's not a room. It's a new beginning.",
  imagePath: "https://artlords-artwork.s3.amazonaws.com/uploads/image/1703/display_apartment_01E.jpg", id: 6, price: 45000},


];





  constructor() {

   }
  ngOnInit(): void {

  }



}
