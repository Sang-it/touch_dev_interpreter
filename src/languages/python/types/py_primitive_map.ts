import { BasePrimitive } from "../../../base";

const PYPrimitiveMap = new Map<BasePrimitive, String>();

PYPrimitiveMap.set("STRING", "str");
PYPrimitiveMap.set("NUMBER", "int");

export { PYPrimitiveMap };
