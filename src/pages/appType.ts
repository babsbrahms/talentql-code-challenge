import { Shape, Color } from "../dataType"

export type SColors = Array<{ selected: boolean, color: Color }>
export type SShapes = Array<{ shape: Shape, selected: boolean }>
export type SItems = Array<{ shape: Shape, color: Color }>