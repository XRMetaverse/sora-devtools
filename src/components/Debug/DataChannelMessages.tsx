import React from "react";

import { useAppSelector } from "@/app/hooks";
import { Message } from "@/components/Debug/Message";
import { DataChannelMessage } from "@/utils";

const Collapse: React.FC<DataChannelMessage> = (props) => {
  const { data, label, timestamp } = props;
  return <Message title={label} timestamp={timestamp} description={data} />;
};

const Log = React.memo((props: DataChannelMessage) => {
  return <Collapse {...props} />;
});

export const DataChannelMessages: React.FC = () => {
  const dataChannelMessages = useAppSelector((state) => state.dataChannelMessages);
  return (
    <>
      {dataChannelMessages.map((message) => {
        const key = message.label + message.timestamp;
        return <Log key={key} {...message} />;
      })}
    </>
  );
};