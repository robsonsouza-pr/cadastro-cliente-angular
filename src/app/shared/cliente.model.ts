export class Cliente{
	constructor(
		public id?: number,
		public nome?:string,
		public limite? : number,
		public tipo? : string,
		public juros?: number
	){}
}
