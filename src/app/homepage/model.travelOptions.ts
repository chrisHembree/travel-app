export class travelOptions {

  public name: string | undefined;
  public description: string | undefined;
  public imagepath: string | undefined;
  public id: number | undefined;
  public price: number | undefined;

constructor(name: string, description: string, imagepath: string, id: number, price: number,) {
  this.name = name;
    this.description = description;
    this.imagepath = imagepath;
    this.id = id;
    this.price = price;
}

}

// "The Space Bus", "The perfect transportation for those who don't want budgetary contraints to keep you from exploring the cosmos! Destinations involving more than 1 month travel time inadvisable."
// "https://ak3.picdn.net/shutterstock/videos/24144673/thumb/1.jpg", 1, 2500


// "The Space Extra Fat Falcon", "The Fat Falcon has all the amenities you've come to expect from SpaceExtra's luxury travel department! Our most popular travel selection!"
// "https://i.pinimg.com/originals/a7/3e/d1/a73ed1e3d3ba5f1f3c570ad88fe92301.jpg", 2, 25000


// "The Founders Choice", "You have the means. You've worked hard. What reason could there be not to choose the favorite luxury travel selection of our late founder, Elon Musk? The Champagne is already prepped and waiting for you."
// "https://i.pinimg.com/originals/41/1c/50/411c5013ebaa6ca4f0995107d4ccff78.jpg", 3, 100000


