import { BaseLetStatement, BasePrimitive } from "../../../base";
import { PYPrimitiveMap } from "../types";

export class PYLetStatement extends BaseLetStatement {
	name: string;
	value: unknown;
	variableType: BasePrimitive;

	constructor(name: string, value: unknown, variableType: BasePrimitive) {
		super(name, value, variableType);
	}

	createCodeBlock(): string {
		return `${this.name}: ${PYPrimitiveMap.get(this.variableType)} = ${
			this.value
		}`;
	}
}
