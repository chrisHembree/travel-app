import { Accomodations } from './model.Accomodations';
import { Destination } from './model.destinations';
import { travelOptions } from './model.travelOptions';

export class Trip {

  public purchase_token: string | undefined;

  constructor(purchase_token: string) {
    this.purchase_token = purchase_token;




  }

}
