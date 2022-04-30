/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/Ship.glb");
  return (
    <Float
      speed={5} // Animation speed, defaults to 1
      rotationIntensity={2} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, defaults to 1
    >
      <group ref={group} {...props} dispose={null}>
        <group
          position={[-0.45, -0.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.07}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ship.geometry}
            material={materials["Copper Satin"]}
            position={[0, 0.11, 10]}
          />
          <Float
            speed={5} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={2} // Up/down float intensity, defaults to 1
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Thruster_1.geometry}
              material={nodes.Thruster_1.material}
              position={[90, -120, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Thruster_2.geometry}
              material={nodes.Thruster_2.material}
              position={[-90, 120, 0]}
            />
          </Float>
          <Float
            speed={5} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={2} // Up/down float intensity, defaults to 1
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Thruster_3.geometry}
              material={nodes.Thruster_3.material}
              position={[-90, -120, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Thruster.geometry}
              material={materials.Damascus}
              position={[90, 120, 0]}
            />
          </Float>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("./models/Ship.glb");