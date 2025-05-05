export type Vector3 = [number, number, number];
export type Color = string | number;

// Game-specific types
export interface GameEntity {
  id: string;
  position: Vector3;
}
