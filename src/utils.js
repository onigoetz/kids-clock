export function isJamesUp(hour, minutes) {
  return (
    (hour >= 8 || (hour === 7 && minutes >= 30)) &&
    (hour < 19 || (hour === 19 && minutes < 30))
  );
}

export function isEliorUp(hour, minutes) {
  return (hour >= 8 || (hour === 7 && minutes >= 30)) && hour < 19;
}

export function isAlyssaUp(hour, minutes) {
  return (hour >= 8 || (hour === 7 && minutes >= 30)) && hour < 19;
}
