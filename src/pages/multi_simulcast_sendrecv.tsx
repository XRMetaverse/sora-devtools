import React, { useEffect } from "react";

import { useAppDispatch } from "@/app/hooks";
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/app/slice";
import { ColDebug } from "@/components/ColDebug";
import { ColDemo } from "@/components/ColDemo";
import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { Header } from "@/components/Header";
import { EnabledParameters, getDefaultVideoCodecType } from "@/utils";

const ENABLED_PARAMETERS: EnabledParameters = {
  audio: true,
  audioBitRate: true,
  audioCodecType: true,
  audioInput: true,
  audioOutput: true,
  audioTrack: true,
  autoGainControl: true,
  cameraDevice: true,
  channelId: true,
  clientId: true,
  dataChannel: true,
  displayResolution: true,
  e2ee: true,
  echoCancellation: true,
  echoCancellationType: true,
  frameRate: true,
  mediaType: true,
  metadata: true,
  micDevice: true,
  noiseSuppression: true,
  resolution: true,
  signalingNotifyMetadata: true,
  signalingUrlCandidates: true,
  simulcastRid: true,
  video: true,
  videoBitRate: true,
  videoCodecType: true,
  videoInput: true,
  videoTrack: true,
};

const MultiSimulcastSendrecv: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setInitialParameter({
        audioCodecType: "OPUS",
        videoCodecType: getDefaultVideoCodecType("VP8"),
        videoBitRate: "3000",
        resolution: "HD",
        simulcastRid: "r0",
        role: "sendrecv",
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
      <Head title={"multi simulcast sendrecv"} />
      <Header pageName="multi simulcast sendrecv" enabledParameters={ENABLED_PARAMETERS} />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDemo multistream simulcast enabledParameters={ENABLED_PARAMETERS} />
            <ColDebug />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default MultiSimulcastSendrecv;
