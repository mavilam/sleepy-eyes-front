export function pickRandomColor(colorArray) {
  const random = Math.floor(Math.random() * colorArray.length)
  return colorArray[random]
}