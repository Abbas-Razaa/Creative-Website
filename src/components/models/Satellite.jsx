"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = React.memo(function Model(props) {
  const { nodes, materials } = useGLTF("/models/satellite-transformed.glb");
  const groupRef = useRef(); // Create a ref for the group

  // Use useFrame to rotate the model
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Satellite}
        position={[0.097, -0.035, -0.154]}
        rotation={[3.054, -1.015, 1.685]}
        scale={[0.875, 0.883, 0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Gold}
        position={[0.097, -0.035, -0.154]}
        rotation={[3.054, -1.015, 1.685]}
        scale={[0.875, 0.883, 0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Satellite_2}
        position={[0.097, -0.035, -0.154]}
        rotation={[3.054, -1.015, 1.685]}
        scale={[0.875, 0.883, 0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.Packs}
        position={[1.414, -0.504, -2.242]}
        rotation={[2.92, 0.552, 2.731]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_56.geometry}
        material={materials.Solar_Panel}
        position={[1.349, -0.481, -2.139]}
        rotation={[2.92, 0.552, -3.071]}
      />
    </group>
  );
});

export default Model;
useGLTF.preload("/models/satellite-transformed.glb");
