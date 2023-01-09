import Button from "@components/inputs/Link";
import { APIEndpoint } from "config";
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
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        "X-Api-Key",
        process.env.NEXT_PUBLIC_API_KEY as string
      );
      const response = await fetch(`${APIEndpoint.live}/clockify/start-time`, {
        method: "POST",
        credentials: "omit",
        headers: requestHeaders,
      });
      const data = await response.json();
      console.log(data);
    }

    //getData();
  }, [clockify_project_id]);

  // TODO: check project itself to see if its archived, sign of it  being completed
  if (isAdmin(session) && !completed) {
    return (
      <Fragment>
        <Button type="button">Start Timer</Button>
      </Fragment>
    );
  }

  return null;
};

export default ClockifyControls;
