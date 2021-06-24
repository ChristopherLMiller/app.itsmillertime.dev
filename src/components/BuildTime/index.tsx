import { FunctionComponent, useEffect, useState } from 'react';
import { getBuildTime } from 'src/utils/functions/getBuildTime';
import makeDurationFriendly from 'src/utils/functions/makeDurationFriendly';

interface iBuildTime {
  clockifyProjectId: string;
}
const BuildTime: FunctionComponent<iBuildTime> = ({ clockifyProjectId }) => {
  const [duration, setDuration] = useState<string>();
  useEffect(() => {
    async function fetchData() {
      const response = await getBuildTime(clockifyProjectId);
      setDuration(makeDurationFriendly(response));
    }

    if (clockifyProjectId) {
      fetchData();
    } else {
      setDuration(`None`);
    }
  });

  return <span>{duration}</span>;
};

export default BuildTime;
