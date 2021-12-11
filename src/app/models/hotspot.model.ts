export class Hotspot {

	public hotspots: Hotspot[] = [];


	address!: string; //hotspot adress
	long_city!: string; // "Amersfoort"
	long_country!: string; // "Netherlands"
	name!: string; //hotspot name
	owner!: string; //wallet address
	reward_scale!: number; //transmit score
	online!: string; //hotspot status
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
	rewardsDay!: number;
	rewardsWeek!: number;
	rewardsMonth!: number;
	rewardsTotal!: number;
}

