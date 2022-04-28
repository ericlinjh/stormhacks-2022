import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Garbage( { onClick, position} ) {
  const group = useRef();
  const { nodes, materials } = useGLTF("garbage.glb");
  return (
    <group ref={group} position={position} dispose={null}>
      <mesh
        onPointerDown={onClick}
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.003"]}
        position={[1.18, 4.42, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("garbage.glb");
