import { Destination } from './model.destinations';
import { travelOptions } from './model.travelOptions';
import { Accommodation } from './model.accommodation';

export class Trip {

  public purchase_token: string | undefined;

  constructor(purchase_token: string) {
    this.purchase_token = purchase_token;




  }

}
