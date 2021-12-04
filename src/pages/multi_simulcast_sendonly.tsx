import React, { useEffect } from "react";

import { useAppDispatch } from "@/app/hooks";
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/app/slice";
import { ColDebug } from "@/components/ColDebug";
import { ColDevtools } from "@/components/ColDevtools";
import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { Header } from "@/components/Header";
import { getDefaultVideoCodecType } from "@/utils";

const MultiSimulcastSendonly: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setInitialParameter({
        role: "sendonly",
        multistream: true,
        simulcast: true,
        spotlight: false,
        audioCodecType: "OPUS",
        videoCodecType: getDefaultVideoCodecType("VP8"),
        videoBitRate: "3000",
        resolution: "720p (1280x720)",
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
      <Head title={"multi simulcast sendonly"} />
      <Header pageName="multi simulcast sendonly" />
      <main role="main">
        <div className="container">
          <div className="row">
            <ColDevtools />
            <ColDebug />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default MultiSimulcastSendonly;
