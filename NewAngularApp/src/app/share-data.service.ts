import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  getLocalEmployee():any{

    let localParseArray = JSON.parse(localStorage.getItem('employees'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
}


}
