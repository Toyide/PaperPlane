import React, { useState, useRef, useEffect } from "react";

const MusicPlayer = ({ isPlaying }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        if (isPlaying) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
          setPlaying(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  useEffect(() => {
    // Sync internal playing state with external isPlaying prop
    if (isPlaying !== playing) {
      setPlaying(isPlaying);
    }
  }, [isPlaying]);

  const handleButtonClick = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-player-controls">
      <audio ref={audioRef} src="./music/learn-to-fly-168330.mp3" loop />
      <button
        className={`music-button ${playing ? "playing" : "paused"}`}
        onClick={handleButtonClick}
      >
        {playing ? <SoundWave /> : <div className="paused-line"></div>}
      </button>
    </div>
  );
};

const SoundWave = () => {
  return (
    <div className="sound-wave">
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
      <div className="sound-bar"></div>
    </div>
  );
};

export default MusicPlayer;