export class Hotspot {

	public hotspots: Hotspot[] = [];


	address!: string; //hotspot adress
	long_city!: string; // "Amersfoort"
	long_country!: string; // "Netherlands"
	name!: string; //hotspot name
	owner!: string; //wallet address
	reward_scale!: number; //transmit score
	online!: string; //hotspot status
	rewards!: number; //sum of rewards
	block!: number;
	block_added!: number;
	elevation!: number;
	gain!: number;
	last_change_block!: number;
	last_poc_challenge!: number;
	lat!: number;
	lng!: number;
	location!: string;
	location_hex!: string;
	mode!: string;
	nonce!: number;
	payer!: string;
	listen_addrs!: string;
	timestamp_added!: string;
	height!: number;
	sync!: boolean;

//   constructor(address: string, long_city: string, long_country: string, name: string, owner: string, score: number, online: string, rewards: number){
// 	  this.address = address;
// 	  this.long_city = long_city;
// 	  this.long_country = long_country;
// 	  this.name = name;
// 	  this.owner = owner;
// 	  this.score = score;
// 	  this.online = online;
// 	  this.rewards = rewards;
//   }


}

