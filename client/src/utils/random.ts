export function getRandomInt(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min));
}

export function getRandomFloat(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
