export class Account {
  address!: string;
  balance!: number;

  constructor(address: string, balance: number) {
	  this.address = address;
	  this.balance = balance;
  }

}
