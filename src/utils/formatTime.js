export const padTime = (time) => {
  if (time < 0) return '00'
  return time < 10 ? '0' + time : time
}

export const format = (time) => {
  const hour = padTime(time.getHours())
  const minute = padTime(time.getMinutes())
  const second = padTime(time.getSeconds())
  return {hour, minute, second}
}
