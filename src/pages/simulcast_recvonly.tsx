import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { disconnectSora, setInitialParameter, setMediaDevices } from "@/app/slice";
import ColDebug from "@/components/ColDebug";
import ColDemo from "@/components/ColDemo";
import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Header from "@/components/Header";
import { EnabledParameters, getDefaultVideoCodecType } from "@/utils";

const ENABLED_PARAMETERS: EnabledParameters = {
  audio: true,
  audioCodecType: true,
  audioOutput: true,
  channelId: true,
  clientId: true,
  dataChannel: true,
  displayResolution: true,
  e2ee: true,
  metadata: true,
  signalingNotifyMetadata: true,
  signalingUrlCandidates: true,
  simulcastRid: true,
  video: true,
  videoCodecType: true,
};

const SimulcastRecvonly: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setInitialParameter({
        audioCodecType: "OPUS",
        videoCodecType: getDefaultVideoCodecType("VP8"),
        simulcastRid: "r0",
      })
    );
    dispatch(setMediaDevices());
    return () => {
      dispatch(disconnectSora());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head title={"simulcast recvonly"} />
      <Header pageName="simulcast recvonly" enabledParameters={ENABLED_PARAMETERS} />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo connectType="recvonly" simulcast enabledParameters={ENABLED_PARAMETERS} />
            <ColDebug />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default SimulcastRecvonly;
