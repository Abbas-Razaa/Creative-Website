// "use client";
// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// const Wizard = React.memo(function Wizard(props) {
//   const { nodes, materials } = useGLTF("/models/home.glb");

//   const modelRef = useRef();

//   useFrame((state) => {
//     modelRef.current.position.y =
//       -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
//   });

//   return (
//     <group
//       {...props}
//       dispose={null}
//       ref={modelRef}
//       position={[0, 0, 0]}
//       scale={[1.7, 1.7, 1.7]}
//       rotation={[0.25, 0, 0]}
//     >
//       <primitive object={nodes.Hips} />
//       <skinnedMesh
//         name="EyeLeft"
//         geometry={nodes.EyeLeft.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeLeft.skeleton}
//         morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="EyeRight"
//         geometry={nodes.EyeRight.geometry}
//         material={materials.Wolf3D_Eye}
//         skeleton={nodes.EyeRight.skeleton}
//         morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//         morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Head"
//         geometry={nodes.Wolf3D_Head.geometry}
//         material={materials.Wolf3D_Skin}
//         skeleton={nodes.Wolf3D_Head.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//       />
//       <skinnedMesh
//         name="Wolf3D_Teeth"
//         geometry={nodes.Wolf3D_Teeth.geometry}
//         material={materials.Wolf3D_Teeth}
//         skeleton={nodes.Wolf3D_Teeth.skeleton}
//         morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//         morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Hair.geometry}
//         material={materials.Wolf3D_Hair}
//         skeleton={nodes.Wolf3D_Hair.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Top.geometry}
//         material={materials.Wolf3D_Outfit_Top}
//         skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//         material={materials.Wolf3D_Outfit_Bottom}
//         skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//         material={materials.Wolf3D_Outfit_Footwear}
//         skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//       />
//       <skinnedMesh
//         geometry={nodes.Wolf3D_Body.geometry}
//         material={materials.Wolf3D_Body}
//         skeleton={nodes.Wolf3D_Body.skeleton}
//       />
//     </group>
//   );
// });

// export default Wizard;
// useGLTF.preload("/models/66fbecba1d8443ae529df223.glb");

"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Wizard(props) {
  // Load GLTF model
  const { nodes, materials } = useGLTF("/models/home.glb");

  // Ref for the model
  const modelRef = useRef();

  // Animation: Bounce the model on the y-axis
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, 0, 0]}
      scale={[1.7, 1.7, 1.7]}
      rotation={[0.25, 0, 0]}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="mesh_0"
        geometry={nodes.mesh_0.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.mesh_0.skeleton}
        morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        name="mesh_1"
        geometry={nodes.mesh_1.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.mesh_1.skeleton}
        morphTargetDictionary={nodes.mesh_1.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh_1.morphTargetInfluences}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        name="mesh_2"
        geometry={nodes.mesh_2.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.mesh_2.skeleton}
        morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
        morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        geometry={nodes.mesh_3.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.mesh_3.skeleton}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        geometry={nodes.mesh_4.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.mesh_4.skeleton}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        geometry={nodes.mesh_5.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.mesh_5.skeleton}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        geometry={nodes.mesh_6.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.mesh_6.skeleton}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
      <skinnedMesh
        geometry={nodes.mesh_7.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.mesh_7.skeleton}
        position={[-0.53, -0.002, -0.201]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload("/models/home.glb");

