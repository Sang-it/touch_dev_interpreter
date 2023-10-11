import { BaseFunctionCallStatement } from "../../../base";

export class TSFunctionCallStatement extends BaseFunctionCallStatement {
	name: string;
	args: unknown[];

	constructor(name: string, args: unknown[]) {
		super(name, args);
	}

	createCodeBlock(): string {
		this.args = this.args.map((arg) => {
			if (typeof arg !== "string") return arg;
			if (arg.startsWith("ident_")) return arg.replace("ident_", "");
			return `"${arg}"`;
		});

		return `${this.name}(${this.args.join(", ")});`;
	}
}
