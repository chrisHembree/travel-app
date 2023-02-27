export class Destination {

  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;
  public id: number | undefined;


  constructor(name: string, description: string, imagePath: string, id: number,) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.id = id;
  }

}




