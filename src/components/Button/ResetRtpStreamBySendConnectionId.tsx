import React from "react";

import { resetRtpStream } from "@/api";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setAPIErrorAlertMessage, setAPIInfoAlertMessage } from "@/app/slice";

type Props = {
  sendConnectionId: string;
};
export const ResetRtpStreamBySendConnectionId: React.FC<Props> = (props) => {
  const sora = useAppSelector((state) => state.soraContents.sora);
  const channelId = useAppSelector((state) => state.channelId);
  const dispatch = useAppDispatch();
  const onClick = async (): Promise<void> => {
    if (!sora?.connectionId) {
      return;
    }
    try {
      const response = await resetRtpStream(channelId, sora.connectionId, props.sendConnectionId);
      dispatch(setAPIInfoAlertMessage(`POST successed. response: ${JSON.stringify(response)}`));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setAPIErrorAlertMessage(error.message));
      }
    }
  };
  return (
    <input
      className="btn btn-secondary btn-sm mx-1"
      type="button"
      name="resetRtpStream"
      defaultValue="reset rid"
      onClick={onClick}
    />
  );
};
