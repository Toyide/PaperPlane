import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { EffectComposer, Noise } from "@react-three/postprocessing";
// import { useMemo } from "react";
import { Experience } from "./components/Experience";
import { Overlay } from "./components/Overlay";
import { usePlay } from "./contexts/Play";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const { play, end } = usePlay();

  // const effects = useMemo(
  //   () => (
  //     <EffectComposer>
  //       <Noise opacity={0.08} />
  //     </EffectComposer>
  //   ),
  //   []
  // );

  return (
    <>
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={1}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
          }}
        >
          <Experience />
        </ScrollControls>
        {/* {effects} */}
      </Canvas>
      <Overlay />
      {play && <MusicPlayer isPlaying={'Play'} />} 
      <footer className ='contact-info'>
        <p>@ Halifax, NS (Open to relocate)  |  <a href="mailto:yge@dal.ca">Email: yge@dal.ca</a>  | <a href="tel:+17787767738">Phone:  (778)776-7738</a> </p>
        
      </footer>
    </>
  );
}

export default App;
