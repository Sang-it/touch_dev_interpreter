import { BaseStatement } from "../types";

export class BaseWhileStatement {
    condition: string;
    children: BaseStatement[];

    constructor(condition: string, children: Object[]) {
        this.condition = condition;
        this.children = children as BaseStatement[];
    }

    createCodeBlock(): string {
        throw "Must override createCodeBlock method!"
    }
}
