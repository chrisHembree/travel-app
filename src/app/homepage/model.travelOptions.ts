export class travelOptions {

  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;
  public id: number | undefined;
  public price: number | undefined;

constructor(name: string, description: string, imagepath: string, id: number, price: number,) {
  this.name = name;
    this.description = description;
    this.imagePath = imagepath;
    this.id = id;
    this.price = price;
}

}




