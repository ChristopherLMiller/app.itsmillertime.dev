export default function makeDurationFriendly(
  time: string,
  includeSeconds?: boolean
): string {
  const regex = new RegExp(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const split = time.match(regex);
  const hours = split[1] !== undefined ? `${split[1]}rs` : ``;
  const minutes = split[2] !== undefined ? `${split[2]}ins` : ``;
  const seconds =
    includeSeconds && split[3] !== undefined ? `${split[3]}ecs` : ``;

  return `${hours} ${minutes} ${seconds}`;
}
