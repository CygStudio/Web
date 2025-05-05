export default function until(
  condition: () => boolean,
  { interval = 500, retry = 10 }: { interval?: number; retry?: number } = {}
): Promise<boolean> {
  return new Promise(resolve => {
    let count = 0
    const check = () => {
      if (condition()) {
        resolve(true)
      } else if (count < retry) {
        count++
        setTimeout(check, interval)
      } else {
        resolve(false)
      }
    }
    check()
  })
}
