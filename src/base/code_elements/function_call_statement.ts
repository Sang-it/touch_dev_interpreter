export class BaseFunctionCallStatement {
	name: string;
	args: unknown[];

	constructor(name: string, args: unknown[]) {
		this.name = name;
		this.args = args;
	}

	createCodeBlock(): string {
		throw "Must override createCodeBlock method!";
	}
}
