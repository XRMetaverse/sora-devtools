import React from "react";
import { FormCheck, FormControl, FormGroup } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setEnabledSignalingNotifyMetadata, setSignalingNotifyMetadata } from "@/app/slice";

export const FormSignalingNotifyMetadata: React.FC = () => {
  const enabledSignalingNotifyMetadata = useAppSelector((state) => state.enabledSignalingNotifyMetadata);
  const signalingNotifyMetadata = useAppSelector((state) => state.signalingNotifyMetadata);
  const dispatch = useAppDispatch();
  const onChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEnabledSignalingNotifyMetadata(event.target.checked));
  };
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSignalingNotifyMetadata(event.target.value));
  };
  return (
    <>
      <FormGroup className="form-inline" controlId="enabledSignalingNotifyMetadata">
        <FormCheck
          type="switch"
          name="enabledSignalingNotifyMetadata"
          label="signalingNotifyMetadata"
          checked={enabledSignalingNotifyMetadata}
          onChange={onChangeSwitch}
        />
      </FormGroup>
      <FormGroup className="form-inline" controlId="signalingNotifyMetadata">
        <FormControl
          className="flex-fill w-500"
          as="textarea"
          placeholder="signalingNotifyMetadataを指定"
          value={signalingNotifyMetadata}
          onChange={onChangeText}
          rows={10}
          disabled={!enabledSignalingNotifyMetadata}
        />
      </FormGroup>
    </>
  );
};
