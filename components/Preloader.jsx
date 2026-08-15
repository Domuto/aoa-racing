"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "/videos/intro.mp4";
const SEEN_KEY = "aoa_intro_seen";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SEEN_KEY)) return;
    setShow(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!show || !videoRef.current) return;

    const video = videoRef.current;
    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {});
    });
  }, [show]);

  function dismiss() {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    document.body.style.overflow = "";
    setShow(false);
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute inset-0 hidden h-full w-full scale-110 object-cover opacity-50 blur-2xl md:block"
        src={SRC}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />
      <video
        className="absolute inset-0 hidden h-full w-full scale-x-[-1.1] scale-y-110 object-cover opacity-50 blur-2xl md:block"
        src={SRC}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 hidden bg-black/20 md:block" />

      <video
        ref={videoRef}
        className="relative z-10 h-full w-full object-contain"
        src={SRC}
        autoPlay
        muted={muted}
        playsInline
        onEnded={dismiss}
      />

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 sm:p-6">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={dismiss}
            className="pointer-events-auto rounded-full border border-white/30 bg-black/50 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            Skip Intro
          </button>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={toggleMute}
            className="pointer-events-auto rounded-full border border-white/30 bg-black/50 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-black"
          >
            {muted ? "Tap for Sound" : "Mute"}
          </button>
        </div>
      </div>
    </div>
  );
}
