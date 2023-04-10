export class Destination {

  public name: string | undefined;
  public description: string | undefined;
  public imagepath: string | undefined;
  public id: number | undefined;


  constructor(name: string, description: string, imagepath: string, id: number,) {
    this.name = name;
    this.description = description;
    this.imagepath = imagepath;
    this.id = id;
  }

}




