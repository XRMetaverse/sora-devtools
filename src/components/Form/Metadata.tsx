import React from "react";
import { FormCheck, FormControl, FormGroup } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setEnabledMetadata, setMetadata } from "@/app/slice";
import { isFormDisabled } from "@/utils";

export const FormMetadata: React.FC = () => {
  const enabledMetadata = useAppSelector((state) => state.enabledMetadata);
  const metadata = useAppSelector((state) => state.metadata);
  const connectionStatus = useAppSelector((state) => state.soraContents.connectionStatus);
  const disabled = isFormDisabled(connectionStatus);
  const dispatch = useAppDispatch();
  const onChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setEnabledMetadata(event.target.checked));
  };
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setMetadata(event.target.value));
  };
  return (
    <>
      <FormGroup className="form-inline" controlId="enabledMetadata">
        <FormCheck
          type="switch"
          name="enabledMetadata"
          label="metadata"
          checked={enabledMetadata}
          onChange={onChangeSwitch}
          disabled={disabled}
        />
      </FormGroup>
      <FormGroup className="form-inline" controlId="metadata">
        <FormControl
          className="flex-fill w-500"
          as="textarea"
          placeholder="Metadataを指定"
          value={metadata}
          onChange={onChangeText}
          rows={10}
          disabled={!enabledMetadata || disabled}
        />
      </FormGroup>
    </>
  );
};
