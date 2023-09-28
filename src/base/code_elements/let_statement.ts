import { BasePrimitive } from "../types";

export class BaseLetStatement {
	name: string;
	value: unknown;
	variableType: BasePrimitive;

	constructor(name: string, value: unknown, variableType: BasePrimitive) {
		this.name = name;
		this.value = value;
		this.variableType = variableType;
	}

	createCodeBlock(): string {
		throw "Must override createCodeBlock method!";
	}
}
