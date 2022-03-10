import Button from "@components/inputs/Link";
import { FC, Fragment, useEffect } from "react";
import { isAdmin } from "src/utils";

require("dotenv").config();

interface IClockifyControlsProps {
  session: any;
  completed: boolean;
  clockify_project_id: string;
}

const ClockifyControls: FC<IClockifyControlsProps> = ({
  session,
  completed,
  clockify_project_id,
}) => {
  // get the current status of the project from clockify
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.clockify.me/api/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects/${clockify_project_id}`,
        {
          headers: {
            Accept: `application/json`,
            "Content-Type": `application/json`,
            "X-Api-Key": process.env.CLOCKIFY_API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }

    getData();
  }, [clockify_project_id]);

  // TODO: check project itself to see if its archived, sign of it  being completed
  if (isAdmin(session) && !completed) {
    return (
      <Fragment>
        <Button href="#">Start Timer</Button>
      </Fragment>
    );
  }

  return null;
};

export default ClockifyControls;
