import queryString from "query-string";
import type { Role } from "sora-js-sdk";

import {
  AUDIO_BIT_RATES,
  AUDIO_CODEC_TYPES,
  AUTO_GAIN_CONTROLS,
  DATA_CHANNEL_SIGNALING,
  DEBUG_TYPES,
  DISPLAY_RESOLUTIONS,
  ECHO_CANCELLATION_TYPES,
  ECHO_CANCELLATIONS,
  FRAME_RATES,
  IGNORE_DISCONNECT_WEBSOCKET,
  MEDIA_TYPES,
  NOISE_SUPPRESSIONS,
  RESOLUTIONS,
  SIMULCAST_RID,
  SPOTLIGHT_FOCUS_RIDS,
  SPOTLIGHT_NUMBERS,
  VIDEO_BIT_RATES,
  VIDEO_CODEC_TYPES,
} from "@/constants";
import type {
  CustomHTMLCanvasElement,
  DisplaySettings,
  Json,
  QueryStringParameters,
  SoraDemoMediaTrackConstraints,
} from "@/types";

// UNIX time を 年-月-日 時:分:秒:ミリ秒 形式に変換
export function formatUnixtime(time: number): string {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  const millisecond = date.getMilliseconds().toString().padStart(3, "0");
  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
}

// OS の Clipboard にテキストを書き込む
export function copy2clipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.resolve();
}

// AudioCodecType の Type Guard
export function isAudioCodecType(audioCodecType: string): audioCodecType is typeof AUDIO_CODEC_TYPES[number] {
  return (AUDIO_CODEC_TYPES as readonly string[]).indexOf(audioCodecType) >= 0;
}

// AudioBitRate の Type Guard
export function isAudioBitRate(audioBitRate: string): audioBitRate is typeof AUDIO_BIT_RATES[number] {
  return (AUDIO_BIT_RATES as readonly string[]).indexOf(audioBitRate) >= 0;
}

// VideoCodecType の Type Guard
export function isVideoCodecType(videoCodecType: string): videoCodecType is typeof VIDEO_CODEC_TYPES[number] {
  return (VIDEO_CODEC_TYPES as readonly string[]).indexOf(videoCodecType) >= 0;
}

// VideoBitRate の Type Guard
export function isVideoBitRate(videoBitRate: string): videoBitRate is typeof VIDEO_BIT_RATES[number] {
  return (VIDEO_BIT_RATES as readonly string[]).indexOf(videoBitRate) >= 0;
}

// Resolution の Type Guard
export function isResolution(resolution: string): resolution is typeof RESOLUTIONS[number] {
  return (RESOLUTIONS as readonly string[]).indexOf(resolution) >= 0;
}

// DisplayResolution の Type Guard
export function isDisplayResolution(
  displayResolution: string
): displayResolution is typeof DISPLAY_RESOLUTIONS[number] {
  return (DISPLAY_RESOLUTIONS as readonly string[]).indexOf(displayResolution) >= 0;
}

// FrameRate の Type Guard
export function isFrameRate(frameRate: string): frameRate is typeof FRAME_RATES[number] {
  return (FRAME_RATES as readonly string[]).indexOf(frameRate) >= 0;
}

// AutoGainControl の Type Guard
export function isAutoGainControl(autoGainControl: string): autoGainControl is typeof AUTO_GAIN_CONTROLS[number] {
  return (AUTO_GAIN_CONTROLS as readonly string[]).indexOf(autoGainControl) >= 0;
}

// NoiseSuppression の Type Guard
export function isNoiseSuppression(noiseSuppression: string): noiseSuppression is typeof NOISE_SUPPRESSIONS[number] {
  return (NOISE_SUPPRESSIONS as readonly string[]).indexOf(noiseSuppression) >= 0;
}

// EchoCancellation の Type Guard
export function isEchoCancellation(echoCancellation: string): echoCancellation is typeof ECHO_CANCELLATIONS[number] {
  return (ECHO_CANCELLATIONS as readonly string[]).indexOf(echoCancellation) >= 0;
}

// EchoCancellationType の Type Guard
export function isEchoCancellationType(
  echoCancellationType: string
): echoCancellationType is typeof ECHO_CANCELLATION_TYPES[number] {
  return (ECHO_CANCELLATION_TYPES as readonly string[]).indexOf(echoCancellationType) >= 0;
}

// SpotlightNumber の Type Guard
export function isSpotlightNumber(spotlightNumber: string): spotlightNumber is typeof SPOTLIGHT_NUMBERS[number] {
  return (SPOTLIGHT_NUMBERS as readonly string[]).indexOf(spotlightNumber) >= 0;
}

// SpotlightFocusRid / SpotlightUnfocusRid の Type Guard
export function isSpotlightFocusRid(
  spotlightFocusRid: string
): spotlightFocusRid is typeof SPOTLIGHT_FOCUS_RIDS[number] {
  return (SPOTLIGHT_FOCUS_RIDS as readonly string[]).indexOf(spotlightFocusRid) >= 0;
}

// SimulcastQuality の Type Guard
export function isSimulcastRid(simulcastRid: string): simulcastRid is typeof SIMULCAST_RID[number] {
  return (SIMULCAST_RID as readonly string[]).indexOf(simulcastRid) >= 0;
}

// MediaType の Type Guard
export function isMediaType(mediaType: string): mediaType is typeof MEDIA_TYPES[number] {
  return (MEDIA_TYPES as readonly string[]).indexOf(mediaType) >= 0;
}

// DataChannelSignaling の Type Guard
export function isDataChannelSignaling(
  dataChannelSignaling: string
): dataChannelSignaling is typeof DATA_CHANNEL_SIGNALING[number] {
  return (DATA_CHANNEL_SIGNALING as readonly string[]).indexOf(dataChannelSignaling) >= 0;
}

// IgnoreDisconnectWebSocket の Type Guard
export function isIgnoreDisconnectWebSocket(
  ignoreDisconnectWebSocket: string
): ignoreDisconnectWebSocket is typeof IGNORE_DISCONNECT_WEBSOCKET[number] {
  return (IGNORE_DISCONNECT_WEBSOCKET as readonly string[]).indexOf(ignoreDisconnectWebSocket) >= 0;
}

// DebugType の Type Guard
export function isDebugType(debugType: string): debugType is typeof DEBUG_TYPES[number] {
  return (DEBUG_TYPES as readonly string[]).indexOf(debugType) >= 0;
}

// クエリ文字列パーサー
export function parseQueryString(): Partial<QueryStringParameters> {
  const {
    audio,
    audioBitRate,
    audioCodecType,
    audioInput,
    audioOutput,
    audioTrack,
    autoGainControl,
    cameraDevice,
    channelId,
    clientId,
    dataChannelSignaling,
    dataChannelMessaging,
    debug,
    debugType,
    displayResolution,
    e2ee,
    echoCancellation,
    echoCancellationType,
    fakeVolume,
    frameRate,
    googCpuOveruseDetection,
    ignoreDisconnectWebSocket,
    mediaType,
    metadata,
    micDevice,
    mute,
    noiseSuppression,
    resolution,
    showStats,
    signalingNotifyMetadata,
    signalingUrlCandidates,
    simulcastRid,
    spotlightFocusRid,
    spotlightNumber,
    spotlightUnfocusRid,
    video,
    videoBitRate,
    videoCodecType,
    videoInput,
    videoTrack,
  } = queryString.parse(location.search, { parseBooleans: true });
  const queryStringParameters: Partial<QueryStringParameters> = {};
  if (typeof audio === "boolean") {
    queryStringParameters.audio = audio;
  }
  if (typeof audioBitRate === "string" && isAudioBitRate(audioBitRate)) {
    queryStringParameters.audioBitRate = audioBitRate;
  }
  if (typeof audioCodecType === "string" && isAudioCodecType(audioCodecType)) {
    queryStringParameters.audioCodecType = audioCodecType;
  }
  const stringAutoGainControl = String(autoGainControl);
  if (isAutoGainControl(stringAutoGainControl)) {
    queryStringParameters.autoGainControl = stringAutoGainControl;
  }
  if (channelId !== undefined) {
    queryStringParameters.channelId = String(channelId);
  }
  if (clientId !== undefined) {
    queryStringParameters.clientId = String(clientId);
  }
  if (typeof googCpuOveruseDetection === "boolean") {
    queryStringParameters.googCpuOveruseDetection = googCpuOveruseDetection;
  }
  if (typeof debug === "boolean") {
    queryStringParameters.debug = debug;
  }
  if (typeof debugType === "string" && isDebugType(debugType)) {
    queryStringParameters.debugType = debugType;
  }
  if (typeof displayResolution === "string" && isDisplayResolution(displayResolution)) {
    queryStringParameters.displayResolution = displayResolution;
  }
  if (typeof e2ee === "boolean") {
    queryStringParameters.e2ee = e2ee;
  }
  const stringEchoCancellation = String(echoCancellation);
  if (isEchoCancellation(stringEchoCancellation)) {
    queryStringParameters.echoCancellation = stringEchoCancellation;
  }
  if (typeof echoCancellationType === "string" && isEchoCancellationType(echoCancellationType)) {
    queryStringParameters.echoCancellationType = echoCancellationType;
  }
  const stringNoiseSuppression = String(noiseSuppression);
  if (isNoiseSuppression(stringNoiseSuppression)) {
    queryStringParameters.noiseSuppression = stringNoiseSuppression;
  }
  if (fakeVolume) {
    queryStringParameters.fakeVolume = String(fakeVolume);
  }
  if (typeof frameRate === "string" && isFrameRate(frameRate)) {
    queryStringParameters.frameRate = frameRate;
  }
  if (typeof mediaType === "string" && isMediaType(mediaType)) {
    queryStringParameters.mediaType = mediaType;
  }
  if (metadata) {
    queryStringParameters.metadata = String(metadata);
  }
  if (typeof showStats === "boolean") {
    queryStringParameters.showStats = showStats;
  }
  if (signalingNotifyMetadata) {
    queryStringParameters.signalingNotifyMetadata = String(signalingNotifyMetadata);
  }
  if (signalingUrlCandidates && typeof signalingUrlCandidates === "string") {
    const parsedSignalingUrlCandidates = JSON.parse(signalingUrlCandidates);
    if (Array.isArray(parsedSignalingUrlCandidates)) {
      queryStringParameters.signalingUrlCandidates = parsedSignalingUrlCandidates;
    }
  }
  if (typeof simulcastRid === "string" && isSimulcastRid(simulcastRid)) {
    queryStringParameters.simulcastRid = simulcastRid;
  }
  if (typeof spotlightNumber === "string" && isSpotlightNumber(spotlightNumber)) {
    queryStringParameters.spotlightNumber = spotlightNumber;
  }
  if (typeof spotlightFocusRid === "string" && isSpotlightFocusRid(spotlightFocusRid)) {
    queryStringParameters.spotlightFocusRid = spotlightFocusRid;
  }
  if (typeof spotlightUnfocusRid === "string" && isSpotlightFocusRid(spotlightUnfocusRid)) {
    queryStringParameters.spotlightUnfocusRid = spotlightUnfocusRid;
  }
  if (typeof resolution === "string" && isResolution(resolution)) {
    queryStringParameters.resolution = resolution;
  }
  if (typeof video === "boolean") {
    queryStringParameters.video = video;
  }
  if (typeof videoBitRate === "string" && isVideoBitRate(videoBitRate)) {
    queryStringParameters.videoBitRate = videoBitRate;
  }
  if (typeof videoCodecType === "string" && isVideoCodecType(videoCodecType)) {
    queryStringParameters.videoCodecType = videoCodecType;
  }
  if (audioInput) {
    queryStringParameters.audioInput = String(audioInput);
  }
  if (videoInput) {
    queryStringParameters.videoInput = String(videoInput);
  }
  if (audioOutput) {
    queryStringParameters.audioOutput = String(audioOutput);
  }
  if (typeof mute === "boolean") {
    queryStringParameters.mute = mute;
  }
  const stringDataChannelSignaling = String(dataChannelSignaling);
  if (isDataChannelSignaling(stringDataChannelSignaling)) {
    queryStringParameters.dataChannelSignaling = stringDataChannelSignaling;
  }
  const stringIgnoreDisconnectWebSocket = String(ignoreDisconnectWebSocket);
  if (isIgnoreDisconnectWebSocket(stringIgnoreDisconnectWebSocket)) {
    queryStringParameters.ignoreDisconnectWebSocket = stringIgnoreDisconnectWebSocket;
  }
  if (typeof micDevice === "boolean") {
    queryStringParameters.micDevice = micDevice;
  }
  if (typeof cameraDevice === "boolean") {
    queryStringParameters.cameraDevice = cameraDevice;
  }
  if (typeof audioTrack === "boolean") {
    queryStringParameters.audioTrack = audioTrack;
  }
  if (typeof videoTrack === "boolean") {
    queryStringParameters.videoTrack = videoTrack;
  }
  if (typeof dataChannelMessaging === "string") {
    queryStringParameters.dataChannelMessaging = dataChannelMessaging;
  }
  return queryStringParameters;
}

// Sora のシグナリングURLを生成
export function createSignalingURL(
  enabledSignalingUrlCandidates: boolean,
  signalingUrlCandidates: string[]
): string | string[] {
  if (enabledSignalingUrlCandidates) {
    // 空文字列は取り除く
    return signalingUrlCandidates.filter((signalingUrlCandidate) => signalingUrlCandidate !== "");
  }
  if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_SORA_SIGNALING_URL) {
    return process.env.NEXT_PUBLIC_SORA_SIGNALING_URL;
  }
  const wsProtocol = window.location.protocol === "https:" ? "wss://" : "ws://";
  const port = window.location.port ? `:${window.location.port}` : "";
  return wsProtocol + window.location.hostname + port + "/signaling";
}

// 解像度に対応する width と height を返す
export function getVideoSizeByResolution(resolution: string): { width: number; height: number } {
  switch (resolution) {
    case "QQVGA":
      return { width: 160, height: 120 };
    case "QCIF":
      return { width: 176, height: 144 };
    case "HQVGA":
      return { width: 240, height: 160 };
    case "QVGA":
      return { width: 320, height: 240 };
    case "VGA":
      return { width: 640, height: 480 };
    case "SD":
      return { width: 720, height: 480 };
    case "HD":
      return { width: 1280, height: 720 };
    case "FHD":
      return { width: 1920, height: 1080 };
    case "UHD 3840x2160":
      return { width: 3840, height: 2160 };
    case "UHD 4096x2160":
      return { width: 4096, height: 2160 };
    case "3840x1920":
      return { width: 3840, height: 1920 };
    default:
      return { width: 0, height: 0 };
  }
}

// getUserMedia の audio constraints を生成
type CreateAudioConstraintsParameters = {
  audio: boolean;
  autoGainControl: typeof AUTO_GAIN_CONTROLS[number];
  noiseSuppression: typeof NOISE_SUPPRESSIONS[number];
  echoCancellation: typeof ECHO_CANCELLATIONS[number];
  echoCancellationType: typeof ECHO_CANCELLATION_TYPES[number];
  audioInput: string;
};
export function createAudioConstraints(parameters: CreateAudioConstraintsParameters): boolean | MediaTrackConstraints {
  const { audio, autoGainControl, noiseSuppression, echoCancellation, echoCancellationType, audioInput } = parameters;
  if (!audio) {
    return false;
  }
  if (!autoGainControl && !noiseSuppression && !echoCancellation && !echoCancellationType && !audioInput) {
    return audio;
  }
  const audioConstraints: SoraDemoMediaTrackConstraints = {};
  if (audioInput) {
    audioConstraints.deviceId = { exact: audioInput };
  }
  const parsedAutoGainControl = parseBooleanString(autoGainControl);
  if (parsedAutoGainControl !== undefined) {
    audioConstraints.autoGainControl = parsedAutoGainControl;
  }
  const parsedNoiseSuppression = parseBooleanString(noiseSuppression);
  if (parsedNoiseSuppression !== undefined) {
    audioConstraints.noiseSuppression = parsedNoiseSuppression;
  }
  const parsedEchoCancellation = parseBooleanString(echoCancellation);
  if (parsedEchoCancellation !== undefined) {
    audioConstraints.echoCancellation = parsedEchoCancellation;
  }
  if (echoCancellationType) {
    audioConstraints.echoCancellationType = echoCancellationType;
  }
  return audioConstraints;
}

// getUserMedia の video constraints を生成
type CreateVideoConstraintsParameters = {
  video: boolean;
  frameRate: string;
  resolution: string;
  videoInput: string;
};
export function createVideoConstraints(parameters: CreateVideoConstraintsParameters): boolean | MediaTrackConstraints {
  const { video, frameRate, resolution, videoInput } = parameters;
  if (!video) {
    return false;
  }
  if (!frameRate && !resolution && !videoInput) {
    return video;
  }
  const videoConstraints: MediaTrackConstraints = {};
  if (frameRate) {
    videoConstraints.frameRate = { min: parseInt(frameRate, 10), max: parseInt(frameRate, 10) };
  }
  if (resolution) {
    const { width, height } = getVideoSizeByResolution(resolution);
    if (0 < width && 0 < height) {
      videoConstraints.width = { exact: width };
      videoConstraints.height = { exact: height };
    }
  }
  if (videoInput) {
    videoConstraints.deviceId = { exact: videoInput };
  }
  return videoConstraints;
}

// Fake 用の constraints を生成
type CreateFakeMediaConstraintsParameters = {
  audio: boolean;
  video: boolean;
  frameRate: string;
  resolution: string;
  volume: string;
};
type FakeMediaStreamConstraints = {
  audio: boolean;
  video: boolean;
  frameRate: number;
  width: number;
  height: number;
  fontSize: number;
  volume: number;
};
export function createFakeMediaConstraints(
  parameters: CreateFakeMediaConstraintsParameters
): FakeMediaStreamConstraints {
  // fake の default frameRate は 30 fps
  const frameRate = parseInt(parameters.frameRate, 10) || 30;
  // width, height の default はそれぞれ 240 / 160
  const resolutionSize = getVideoSizeByResolution(parameters.resolution);
  const width = resolutionSize.width || 240;
  const height = resolutionSize.height || 160;
  const fontSize = Math.floor(width / 5);
  return {
    audio: parameters.audio,
    video: parameters.video,
    frameRate: frameRate,
    width: width,
    height: height,
    fontSize: fontSize,
    volume: parseFloat(parameters.volume),
  };
}

// Fake 用の MediaStream を生成
export function createFakeMediaStream(parameters: FakeMediaStreamConstraints): {
  canvas: CustomHTMLCanvasElement | null;
  mediaStream: MediaStream;
  gainNode: GainNode | null;
} {
  const mediaStream = new MediaStream();
  let canvas = null;
  if (parameters.video) {
    canvas = document.createElement("canvas") as CustomHTMLCanvasElement;
    // Firefox では getContext を呼ばないと captureStream が失敗する
    canvas.getContext("2d");
    canvas.width = parameters.width;
    canvas.height = parameters.height;
    const cancasStream = canvas.captureStream(parameters.frameRate);
    const videoTracks = cancasStream.getTracks();
    mediaStream.addTrack(videoTracks[0]);
  }
  let gainNode = null;
  if (parameters.audio) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const selectedOscillatorType = "sine";
    oscillator.type = selectedOscillatorType;
    gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    oscillator.start(0);
    const mediaStreamDestination = audioContext.createMediaStreamDestination();
    gainNode.connect(mediaStreamDestination);
    const audioTracks = mediaStreamDestination.stream.getTracks();
    mediaStream.addTrack(audioTracks[0]);
    gainNode.gain.setValueAtTime(parameters.volume, 0);
  }
  return { canvas, mediaStream, gainNode };
}

// Fake mediastream を生成するための canvas に書き込みをする
export function drawFakeCanvas(
  canvas: CustomHTMLCanvasElement | null,
  colorCode: number,
  fontSize: number,
  text: string
): void {
  if (canvas === null) {
    return;
  }
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }
  context.globalCompositeOperation = "source-over";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#" + ("0".repeat(6) + colorCode.toString(16)).slice(-6);
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#" + ("0".repeat(6) + (0xffffff - colorCode).toString(16)).slice(-6);
  context.font = `${fontSize}px Arial`;
  const x = canvas.width / 2 - fontSize / 2;
  const margin = (fontSize / 4) * (text.length - 1);
  const y = canvas.height / 2 + fontSize / 2.5;
  context.fillText(text, x - margin, y);
}

export function parseBooleanString(value: string): boolean | undefined {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  }
  return;
}

export function parseMetadata(enabledMetadata: boolean, metadata: string): Json | undefined {
  if (!enabledMetadata) {
    return undefined;
  }
  try {
    return JSON.parse(metadata);
  } catch (_e) {
    // JSON parse に失敗しても何もしない
  }
  return metadata;
}

export function getDefaultVideoCodecType(
  initialValue: typeof VIDEO_CODEC_TYPES[number]
): typeof VIDEO_CODEC_TYPES[number] {
  if (!RTCRtpSender.getCapabilities) {
    return initialValue;
  }
  const capabilities = RTCRtpSender.getCapabilities("video");
  if (!capabilities || !capabilities.codecs) {
    return initialValue;
  }
  const codecs = capabilities.codecs.map((c) => c.mimeType.replace("video/", ""));
  if (codecs.includes(initialValue)) {
    return initialValue;
  }
  if (codecs.includes("VP9")) {
    return "VP9";
  }
  if (codecs.includes("VP8")) {
    return "VP8";
  }
  if (codecs.includes("H264")) {
    return "H264";
  }
  if (codecs.includes("AV1X")) {
    return "AV1";
  }
  if (codecs.includes("H265")) {
    return "H265";
  }
  return initialValue;
}

export async function getDevices(): Promise<MediaDeviceInfo[]> {
  // https じゃない場合などで mediaDevices が undefined になる可能性がある
  if (navigator.mediaDevices === undefined) {
    return [];
  }
  try {
    return await navigator.mediaDevices.enumerateDevices();
  } catch (_) {
    // 例外が起きた場合は何もしない
  }
  return [];
}

export function createDisplaySettings(
  role: Role,
  multistream: boolean,
  simulcast: boolean,
  spotlight: boolean,
  dataChannelMessagingOnly: boolean
): DisplaySettings {
  const displaySettings: DisplaySettings = {
    audio: false,
    audioCodecType: false,
    audioBitRate: false,
    audioConstraints: false,
    audioInput: false,
    audioOutput: false,
    audioTrack: false,
    cameraDevice: false,
    displayResolution: false,
    mediaType: false,
    micDevice: false,
    simulcastRid: false,
    spotlightFocusRid: false,
    spotlightNumber: false,
    spotlightUnfocusRid: false,
    video: false,
    videoBitRate: false,
    videoCodecType: false,
    videoConstraints: false,
    videoInput: false,
    videoTrack: false,
  };
  if (dataChannelMessagingOnly) {
    return displaySettings;
  }
  displaySettings.audio = true;
  displaySettings.video = true;
  displaySettings.displayResolution = true;
  if (role === "sendonly" || role === "sendrecv") {
    displaySettings.mediaType = true;
    displaySettings.audioCodecType = true;
    displaySettings.audioBitRate = true;
    displaySettings.audioConstraints = true;
    displaySettings.videoCodecType = true;
    displaySettings.videoBitRate = true;
    displaySettings.videoConstraints = true;
    displaySettings.audioInput = true;
    displaySettings.audioOutput = true;
    displaySettings.videoInput = true;
    displaySettings.cameraDevice = true;
    displaySettings.micDevice = true;
    displaySettings.audioTrack = true;
    displaySettings.videoTrack = true;
  } else if (role === "recvonly") {
    displaySettings.audioCodecType = true;
    displaySettings.videoCodecType = true;
    displaySettings.audioOutput = true;
  }
  // multistream recvonly は codec type を表示しない
  if (role === "recvonly" && multistream) {
    displaySettings.audioCodecType = false;
    displaySettings.videoCodecType = false;
  }
  // simulcast  sendrecv/recvnoly では simulcastRid を表示する
  if ((role === "recvonly" || role === "sendrecv") && simulcast && !spotlight) {
    displaySettings.simulcastRid = true;
  }
  // spotlight の場合は spotlightNumber を表示する
  if (spotlight) {
    displaySettings.spotlightNumber = true;
  }
  // spotlight,  sendrecv/recvnoly では spotlightFocusRid, spotlightUnfocusRid を表示する
  if ((role === "recvonly" || role === "sendrecv") && simulcast) {
    displaySettings.spotlightFocusRid = true;
    displaySettings.spotlightUnfocusRid = true;
  }
  return displaySettings;
}
