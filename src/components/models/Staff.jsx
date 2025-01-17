"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = React.memo(function Model(props) {
  const modelRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [scale, setScale] = useState([1.2, 1.2, 1.2]);

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  const { nodes, materials } = useGLTF("/models/planet-transformed.glb");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPosition([0, 0.4, 0]);
        setScale([1.5, 1.5, 1.5]);
      } else {
        setPosition([0, 0, 0]);
        setScale([1.2, 1.2, 1.2]);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      scale={scale}
      position={position}
      ref={modelRef}
    >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" rotation={[0.031, 0, 0.064]}>
          <group name="Clouds_1">
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Clouds}
            />
          </group>
          <group name="Planet_2">
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.Planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

export default Model;
useGLTF.preload("/models/planet-transformed.glb");
