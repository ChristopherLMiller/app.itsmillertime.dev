export default function makeDurationFriendly(
  time: string,
  includeSeconds?: boolean,
  decimal = false,
): string {
  const regex = new RegExp(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const split = time.match(regex);

  if (split === null || split === undefined) {
    return "N/A";
  }

  // if we want the time returned in decimal hours we process that differently from if we want it worded
  if (decimal) {
    const hours = split[1] !== undefined ? parseInt(split[1].slice(0, -1)) : 0;
    const minutes =
      split[2] !== undefined ? parseInt(split[2].slice(0, -1)) : 0;
    const total = hours + minutes / 60;
    return `${total.toFixed(1)}Hrs`;
  } else {
    const hours = split[1] !== undefined ? `${split[1]}rs` : ``;
    const minutes = split[2] !== undefined ? `${split[2]}ins` : ``;
    const seconds =
      includeSeconds && split[3] !== undefined ? `${split[3]}ecs` : ``;
    return `${hours} ${minutes} ${seconds}`;
  }
}
