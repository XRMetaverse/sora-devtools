import React, { useEffect } from "react";

import { useAppDispatch } from "@/app/hooks";
import { disconnectSora, setInitialParameter, setMediaDevices } from "@/app/slice";
import { ColDebug } from "@/components/ColDebug";
import { ColDevtools } from "@/components/ColDevtools";
import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { Header } from "@/components/Header";

const MultiRecvonly: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setInitialParameter({
        multistream: true,
        spotlight: false,
        simulcast: false,
        role: "recvonly",
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
      <Head title={"multi recvonly"} />
      <Header pageName="multi recvonly" />
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
export default MultiRecvonly;
