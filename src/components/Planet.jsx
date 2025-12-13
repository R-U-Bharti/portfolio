import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Planet(props) {
  const shapeContainer = useRef(null);
  const shperesContainer = useRef(null);
  const ringContainer = useRef(null);
  const { nodes, materials } = useGLTF("/models/Planet.glb");

  const mouse = useRef({ x: 0, y: 0 });

  // Apply hue shift to materials
  // React.useEffect(() => {
  //   // Change specific material colors
  //   // Ring and small sphere use "Material.001"
  //   if (materials["Material.001"]) {
  //     materials["Material.001"].color = new THREE.Color(0x00ffff); // Cyan - change this!
  //     // Other color options:
  //     // 0xff0000 - Red
  //     // 0x00ff00 - Green
  //     // 0x0000ff - Blue
  //     // 0xff00ff - Magenta
  //     // 0xffff00 - Yellow
  //     // 0xff6600 - Orange
  //     // 0x9966ff - Purple
  //     // 0xffffff - White
  //     // 0x000000 - Black
  //   }

  //   // Large sphere uses "Material.002" - uncomment to change it too
  //   // if (materials["Material.002"]) {
  //   //   materials["Material.002"].color = new THREE.Color(0xff6600); // Orange
  //   // }

  //   // Optional: Add metallic/glossy effect
  //   // materials["Material.001"].metalness = 0.8;
  //   // materials["Material.001"].roughness = 0.2;
  // }, [materials]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(shapeContainer.current.position, {
      y: 5,
      duration: 3,
      ease: "circ.out",
    });
    tl.from(
      shperesContainer.current.rotation,
      {
        x: 0,
        y: Math.PI,
        z: -Math.PI,
        duration: 3,
        ease: "power1.inOut",
      },
      "-=25%"
    );
    tl.from(
      ringContainer.current.rotation,
      {
        x: 0.8,
        y: 0,
        z: 0,
        duration: 3,
        ease: "power1.inOut",
      },
      "<"
    );
  }, []);

  // Track mouse movement
  React.useEffect(() => {
    const handleMouseMove = e => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smoothly rotate planet to follow mouse
  useFrame(() => {
    if (shapeContainer.current) {
      // Tilt based on mouse position (adjust multiplier for sensitivity)
      const targetRotationY = mouse.current.x * 0.5;
      const targetRotationX = mouse.current.y * 0.5;

      // Smooth interpolation (lerp) for natural movement
      shapeContainer.current.rotation.y +=
        (targetRotationY - shapeContainer.current.rotation.y) * 0.05;
      shapeContainer.current.rotation.x +=
        (targetRotationX - shapeContainer.current.rotation.x) * 0.05;
    }

    // Optional: Add continuous rotation to spheres
    if (shperesContainer.current) {
      shperesContainer.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={shperesContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials["Material.001"]}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials["Material.001"]}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/models/Planet.glb");
