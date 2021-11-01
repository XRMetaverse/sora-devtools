import React from "react";
import { FormControl, FormGroup } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setDebugFilterText } from "@/app/slice";

export const DebugFilter: React.FC = () => {
  const debugFilterText = useAppSelector((state) => state.debugFilterText);
  const dispatch = useAppDispatch();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setDebugFilterText(event.target.value));
  };
  return (
    <FormGroup className="form-inline debug-filter" controlId="channelId">
      <FormControl type="text" placeholder="Filter" value={debugFilterText} onChange={onChange} autoComplete="off" />
    </FormGroup>
  );
};