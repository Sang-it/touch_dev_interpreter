import { BaseNativeFunction } from "../../../base";

const TSNativeFunctionMap = new Map<BaseNativeFunction, String>();

TSNativeFunctionMap.set("PRINT", "console.log");

export { TSNativeFunctionMap };
