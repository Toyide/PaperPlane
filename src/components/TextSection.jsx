import { Text, Plane } from "@react-three/drei";
import {fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import * as THREE from "three";


export const TextSection = ({ title, subtitle, textWidth=5, image, imagePosition,imgargs, ...props }) => {
  // console.log(imagePosition)
  // console.log(props.position)
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      {!!image && (
            <Plane 
              args={imgargs}
              position= {imagePosition}
            > 
              <meshStandardMaterial 
                    attach="material" 
                    map={new THREE.TextureLoader().load(image)} 
                    transparent
                    onBeforeCompile={fadeOnBeforeCompileFlat}
              />
            </Plane>
      )}
      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={textWidth}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
