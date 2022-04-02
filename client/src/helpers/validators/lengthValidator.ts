export const lenghtValidator = (min: number = 0, max: number = 100000) => (val: string) => val.length > min &&  val.length < max