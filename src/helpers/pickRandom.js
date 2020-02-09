export default function pickRandom(arr) {
  let min = 0;
  let max = arr.length
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  return arr[randomNum]
}