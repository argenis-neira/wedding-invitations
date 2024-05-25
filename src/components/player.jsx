import React, { useState, useRef, useEffect } from "react";

const Reproductor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <>
      <div className="reproductor">
        <audio
          ref={audioRef}
          src="audios/main_audio.mp3"
          onEnded={() => setIsPlaying(false)}
        ></audio>
        <div className="reproductor__control">
          <button onClick={togglePlayPause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 69 69"
              className="oneColor"
            >
              {isPlaying ? (
                <path
                  fill="#b9f2ff"
                  d="M36.249 40.151h3.894V28.848h-3.894v11.303zm-7.392 0h3.894V28.848h-3.894v11.303zM34.5 0C15.446 0 0 15.446 0 34.5 0 53.554 15.446 69 34.5 69 53.554 69 69 53.554 69 34.5 69 15.446 53.554 0 34.5 0z"
                ></path>
              ) : (
                <path
                  fill="#b9f2ff"
                  d="m36.508 38.768-7.531 4.268V25.965l7.531 4.268 7.531 4.267-7.531 4.268zM34.5 0C15.446 0 0 15.447 0 34.5 0 53.554 15.446 69 34.5 69 53.553 69 69 53.554 69 34.5 69 15.447 53.553 0 34.5 0z"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div style={{ paddingTop: "5px" }}>Dale Play!</div>
      </div>
    </>
  );
};

export default Reproductor;
