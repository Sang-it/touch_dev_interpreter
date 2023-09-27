import { BasePrimitive } from "src/base";

const TSPrimitiveMap = new Map<BasePrimitive, String>();

TSPrimitiveMap.set("STRING", "string");
TSPrimitiveMap.set("NUMBER", "number");

export { TSPrimitiveMap };
