import { StaticSchemaType } from "./StaticSchemaType";
import { ArraySchemaType } from "./ArraySchemaType";
import { SchemaType } from "./SchemaType";

export const SchemaTypeArrayToElement = {
  [SchemaType.UINT8_ARRAY]: SchemaType.UINT8,
  [SchemaType.UINT16_ARRAY]: SchemaType.UINT16,
  [SchemaType.UINT24_ARRAY]: SchemaType.UINT24,
  [SchemaType.UINT32_ARRAY]: SchemaType.UINT32,
  [SchemaType.UINT40_ARRAY]: SchemaType.UINT40,
  [SchemaType.UINT48_ARRAY]: SchemaType.UINT48,
  [SchemaType.UINT56_ARRAY]: SchemaType.UINT56,
  [SchemaType.UINT64_ARRAY]: SchemaType.UINT64,
  [SchemaType.UINT72_ARRAY]: SchemaType.UINT72,
  [SchemaType.UINT80_ARRAY]: SchemaType.UINT80,
  [SchemaType.UINT88_ARRAY]: SchemaType.UINT88,
  [SchemaType.UINT96_ARRAY]: SchemaType.UINT96,
  [SchemaType.UINT104_ARRAY]: SchemaType.UINT104,
  [SchemaType.UINT112_ARRAY]: SchemaType.UINT112,
  [SchemaType.UINT120_ARRAY]: SchemaType.UINT120,
  [SchemaType.UINT128_ARRAY]: SchemaType.UINT128,
  [SchemaType.UINT136_ARRAY]: SchemaType.UINT136,
  [SchemaType.UINT144_ARRAY]: SchemaType.UINT144,
  [SchemaType.UINT152_ARRAY]: SchemaType.UINT152,
  [SchemaType.UINT160_ARRAY]: SchemaType.UINT160,
  [SchemaType.UINT168_ARRAY]: SchemaType.UINT168,
  [SchemaType.UINT176_ARRAY]: SchemaType.UINT176,
  [SchemaType.UINT184_ARRAY]: SchemaType.UINT184,
  [SchemaType.UINT192_ARRAY]: SchemaType.UINT192,
  [SchemaType.UINT200_ARRAY]: SchemaType.UINT200,
  [SchemaType.UINT208_ARRAY]: SchemaType.UINT208,
  [SchemaType.UINT216_ARRAY]: SchemaType.UINT216,
  [SchemaType.UINT224_ARRAY]: SchemaType.UINT224,
  [SchemaType.UINT232_ARRAY]: SchemaType.UINT232,
  [SchemaType.UINT240_ARRAY]: SchemaType.UINT240,
  [SchemaType.UINT248_ARRAY]: SchemaType.UINT248,
  [SchemaType.UINT256_ARRAY]: SchemaType.UINT256,

  [SchemaType.INT8_ARRAY]: SchemaType.INT8,
  [SchemaType.INT16_ARRAY]: SchemaType.INT16,
  [SchemaType.INT24_ARRAY]: SchemaType.INT24,
  [SchemaType.INT32_ARRAY]: SchemaType.INT32,
  [SchemaType.INT40_ARRAY]: SchemaType.INT40,
  [SchemaType.INT48_ARRAY]: SchemaType.INT48,
  [SchemaType.INT56_ARRAY]: SchemaType.INT56,
  [SchemaType.INT64_ARRAY]: SchemaType.INT64,
  [SchemaType.INT72_ARRAY]: SchemaType.INT72,
  [SchemaType.INT80_ARRAY]: SchemaType.INT80,
  [SchemaType.INT88_ARRAY]: SchemaType.INT88,
  [SchemaType.INT96_ARRAY]: SchemaType.INT96,
  [SchemaType.INT104_ARRAY]: SchemaType.INT104,
  [SchemaType.INT112_ARRAY]: SchemaType.INT112,
  [SchemaType.INT120_ARRAY]: SchemaType.INT120,
  [SchemaType.INT128_ARRAY]: SchemaType.INT128,
  [SchemaType.INT136_ARRAY]: SchemaType.INT136,
  [SchemaType.INT144_ARRAY]: SchemaType.INT144,
  [SchemaType.INT152_ARRAY]: SchemaType.INT152,
  [SchemaType.INT160_ARRAY]: SchemaType.INT160,
  [SchemaType.INT168_ARRAY]: SchemaType.INT168,
  [SchemaType.INT176_ARRAY]: SchemaType.INT176,
  [SchemaType.INT184_ARRAY]: SchemaType.INT184,
  [SchemaType.INT192_ARRAY]: SchemaType.INT192,
  [SchemaType.INT200_ARRAY]: SchemaType.INT200,
  [SchemaType.INT208_ARRAY]: SchemaType.INT208,
  [SchemaType.INT216_ARRAY]: SchemaType.INT216,
  [SchemaType.INT224_ARRAY]: SchemaType.INT224,
  [SchemaType.INT232_ARRAY]: SchemaType.INT232,
  [SchemaType.INT240_ARRAY]: SchemaType.INT240,
  [SchemaType.INT248_ARRAY]: SchemaType.INT248,
  [SchemaType.INT256_ARRAY]: SchemaType.INT256,

  [SchemaType.BYTES1_ARRAY]: SchemaType.BYTES1,
  [SchemaType.BYTES2_ARRAY]: SchemaType.BYTES2,
  [SchemaType.BYTES3_ARRAY]: SchemaType.BYTES3,
  [SchemaType.BYTES4_ARRAY]: SchemaType.BYTES4,
  [SchemaType.BYTES5_ARRAY]: SchemaType.BYTES5,
  [SchemaType.BYTES6_ARRAY]: SchemaType.BYTES6,
  [SchemaType.BYTES7_ARRAY]: SchemaType.BYTES7,
  [SchemaType.BYTES8_ARRAY]: SchemaType.BYTES8,
  [SchemaType.BYTES9_ARRAY]: SchemaType.BYTES9,
  [SchemaType.BYTES10_ARRAY]: SchemaType.BYTES10,
  [SchemaType.BYTES11_ARRAY]: SchemaType.BYTES11,
  [SchemaType.BYTES12_ARRAY]: SchemaType.BYTES12,
  [SchemaType.BYTES13_ARRAY]: SchemaType.BYTES13,
  [SchemaType.BYTES14_ARRAY]: SchemaType.BYTES14,
  [SchemaType.BYTES15_ARRAY]: SchemaType.BYTES15,
  [SchemaType.BYTES16_ARRAY]: SchemaType.BYTES16,
  [SchemaType.BYTES17_ARRAY]: SchemaType.BYTES17,
  [SchemaType.BYTES18_ARRAY]: SchemaType.BYTES18,
  [SchemaType.BYTES19_ARRAY]: SchemaType.BYTES19,
  [SchemaType.BYTES20_ARRAY]: SchemaType.BYTES20,
  [SchemaType.BYTES21_ARRAY]: SchemaType.BYTES21,
  [SchemaType.BYTES22_ARRAY]: SchemaType.BYTES22,
  [SchemaType.BYTES23_ARRAY]: SchemaType.BYTES23,
  [SchemaType.BYTES24_ARRAY]: SchemaType.BYTES24,
  [SchemaType.BYTES25_ARRAY]: SchemaType.BYTES25,
  [SchemaType.BYTES26_ARRAY]: SchemaType.BYTES26,
  [SchemaType.BYTES27_ARRAY]: SchemaType.BYTES27,
  [SchemaType.BYTES28_ARRAY]: SchemaType.BYTES28,
  [SchemaType.BYTES29_ARRAY]: SchemaType.BYTES29,
  [SchemaType.BYTES30_ARRAY]: SchemaType.BYTES30,
  [SchemaType.BYTES31_ARRAY]: SchemaType.BYTES31,
  [SchemaType.BYTES32_ARRAY]: SchemaType.BYTES32,

  [SchemaType.BOOL_ARRAY]: SchemaType.BOOL,
  [SchemaType.ADDRESS_ARRAY]: SchemaType.ADDRESS,
} as {
  [K in SchemaType]: K extends ArraySchemaType ? StaticSchemaType : undefined;
};
