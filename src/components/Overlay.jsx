import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Yide-Projects
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <div className="intro__scroll">
            <p>Scroll to begin the journey</p>
            <p>Large screen gets the best exprience</p>
            <p> Happy Flight!!!</p>
            </div>
          
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
      <div className="outro__text">
        <p>Wish you had a great flight with me...</p>
        <p>Let’s discuss how I can contribute to your team.</p>
        <p>Feel free to reach out!</p>
      </div>
        
      </div>
     
    </div>
  );
};
