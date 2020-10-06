import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimulcastQuality } from "sora-js-sdk";

import { changeSimulcastQuality } from "@/api";
import { setAPIErrorAlertMessage, setAPIInfoAlertMessage, SoraDemoState } from "@/slice";

type Props = {
  quality: SimulcastQuality;
};
const ChangeSimulcastQuality: React.FC<Props> = (props) => {
  const { soraContents, channelId } = useSelector((state: SoraDemoState) => state);
  const dispatch = useDispatch();
  const onClick = async (): Promise<void> => {
    if (!soraContents.sora?.connectionId) {
      return;
    }
    try {
      const response = await changeSimulcastQuality(channelId, soraContents.sora.connectionId, props.quality);
      dispatch(setAPIInfoAlertMessage(`POST successed. response: ${JSON.stringify(response)}`));
    } catch (error) {
      dispatch(setAPIErrorAlertMessage(error.message));
    }
  };
  return (
    <div className="col-auto mb-1">
      <input
        className="btn btn-secondary"
        type="button"
        name={`changeAllSimulcastQualityTo${props.quality.charAt(0).toUpperCase() + props.quality.slice(1)}`}
        defaultValue={`${props.quality} quality`}
        onClick={onClick}
      />
    </div>
  );
};

export default ChangeSimulcastQuality;
