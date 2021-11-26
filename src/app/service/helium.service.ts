import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Account } from "../models/account.model";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { throwError } from 'rxjs';
import { Hotspot } from '../models/hotspot.model';


@Injectable({
  providedIn: 'root'
})
export class HeliumService {
  //API: https://docs.helium.com/api/blockchain/accounts#reward-totals-for-an-account
  //account addres: 14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL

  constructor( private http:HttpClient ) { }

  private url = 'https://api.helium.io/v1/'; //api url
  //private accountAdres = '14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL';
  
 getData(){
	return this.http.get(this.url + 'accounts/14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL');
  }



  ////////////////////////////////////////////////////////////////
  // ACCOUNTS
  ////////////////////////////////////////////////////////////////
  
  /**
   * general account info
   * @param accountAdres 
   * @returns 
   */
  getAccountAddres(accountAdres:string): Observable<Account>{
	let params = 'accounts/' + accountAdres;
	return this.http.get<Account> (this.url + params)
  }

  /**
   * get all hotspots by account
   * @param accountAdres 
   * @returns 
   */
  getHotspotsForAccount(accountAdres:string): Observable<Account>{
	let params = 'accounts/' + accountAdres + '/hotspots';
	return this.http.get<Account>(this.url + params);
  }

  /**
   * get rewards for account
   * @param accountAdres 
   * @returns 
   */
  getRewardsForAccount(accountAdres:string): Observable<Account>{
	let params = 'accounts/' + accountAdres + '/rewards';
	return this.http.get<Account>(this.url + params);
  }


  /**
  * TODO get the cursor and then map data 
  * Returns the total rewards for a given account in a given timeframe. 
  * @param accountAdres - this is the account address
  * Timestamps can be given in ISO 8601 format (e.g. 2020-08-27T00:00:00Z)
  * or in relative time (e.g. -1 week, which when url esacped becomes -1%20week). When ommitted the current time is assumed.
  * @returns 
  */
  getRewardTotalForAccount(accountAdres:string): Observable<Account>{
	let sum = '?min_time=-7%20day&bucket=day';
	let params = 'accounts/' + accountAdres + '/rewards/' + sum;
	let response = this.http.get<Account>(this.url + params);
	
	//TODO use the cursor to get the real data
	
	// let data = this.http.get(this.url + '/blocks?cursor=' + c);

	return response;  //todo return data
  }
 
 
  ////////////////////////////////////////////////////////////////
  // HOTSPOTS
  ////////////////////////////////////////////////////////////////
  
  /**
  * TODO: make sure in app.component.ts we dont need subscribe anymore
  * get hotspot by name
  * @param name - this is the hotspot address
  * The name must be all lower-case with dashes between the words
  * example: 'tangy-blood-lion'
  * @returns 
  */
	getHotspotByName(name:string): Observable<Hotspot>{
		let params = 'hotspots/' + 'name/' + name; 
		return this.http.get<Hotspot>(this.url + params);
	}
  

/**
 * get reward total per hotspot
 * example: 'tangy-blood-lion'
 * here we can also add params for min and max time
 * @param name 
 * @returns 
 */
   getTotalRewardsByHotspot(name:string): Observable<Hotspot>{
	let params = 'hotspots/' + 'name' + name;
	return this.http.get<Hotspot>(this.url + params);
  }

}