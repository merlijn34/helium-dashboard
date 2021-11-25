import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeliumService {

  //API: https://docs.helium.com/api/blockchain/accounts#reward-totals-for-an-account

  //account addres: 14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL

  constructor( private http:HttpClient ) { }
  private url = 'https://api.helium.io/v1/'; //api url
  private accountAdres = '14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL';
  
  getData(){
	return this.http.get(this.url + 'accounts/14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL');
  }


  ////////////////////////////////////////////////////////////////
  // ACCOUNTS
  ////////////////////////////////////////////////////////////////
  

  //general account info
  getAccountAddres(){
	let params = 'accounts/' + this.accountAdres;
	return this.http.get(this.url + params);
  }

  //get all hotspots by account
  getHotspotsForAccount(){
	let params = 'accounts/' + this.accountAdres + '/hotspots';
	return this.http.get(this.url + params);
  }

  //get rewards for account
  getRewardsForAccount(){
	let params = 'accounts/' + this.accountAdres + '/rewards';
	return this.http.get(this.url + params);
  }



  /*
  TODO get the cursor and then map data 
  * Returns the total rewards for a given account in a given timeframe. 
  * Timestamps can be given in ISO 8601 format (e.g. 2020-08-27T00:00:00Z)
  * or in relative time (e.g. -1 week, which when url esacped becomes -1%20week). When ommitted the current time is assumed.
  */
  getRewardTotalForAccount(){
	let sum = '?min_time=-7%20day&bucket=day';
	let params = 'accounts/' + this.accountAdres + '/rewards/' + sum;
	let response = this.http.get(this.url + params);
	
	//TODO use the cursor to get the real data
	
	// let data = this.http.get(this.url + '/blocks?cursor=' + c);

	return response;  //todo return data
  }
 
 
  ////////////////////////////////////////////////////////////////
  // HOTSPOTS
  ////////////////////////////////////////////////////////////////
  
  /*
    TODO: make sure in app.component.ts we dont need subscribe anymore
  * get hotspot by name
  * The name must be all lower-case with dashes between the words
  * example: 'tangy-blood-lion'
  */
	getHotspotByName(name:string){
		let params = 'hotspots/' + 'name/' + name;
		//return this.http.get(this.url + params);
		return this.http
      .get(
        this.url + params, {responseType: 'json'}
      ).pipe(
        map(responseData => {
          console.log('API response', responseData)
          return responseData;
      }),
      catchError(errorRes => {
          console.log('API response', errorRes)
          return throwError(errorRes);
      })
    );
  }
  
   /*
  * get reward total per hotspot
  * @param name this is the hotspot address
  * example: 'tangy-blood-lion'
  * here we can also add params for min and max time
  */
   getTotalRewardsByHotspot(name:string){
	let params = 'hotspots/' + 'name' + name;
	return this.http.get(this.url + params);
  }

}
