interface Window {
  webkitAudioContext: AudioContext;
  readonly CropTarget: {
    fromElement(element: Element): Promise<CropTarget>;
  };
}

interface MediaStreamTrack {
  cropTo(cropTraget: CropTarget): Promise<void>;
}

type CropTarget = {
  symbol: "CropTarget";
}

declare global {
  let window: Window;
}
