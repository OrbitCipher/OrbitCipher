"use client"

import { useRef, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import * as THREE from "three"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Adjust camera to better frame the sphere
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = isMobile ? 15 : 12
    camera.position.y = 0

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create a custom shader for the background
    const createBackgroundShader = () => {
      const geometry = new THREE.PlaneGeometry(100, 100)
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
          mousePosition: { value: new THREE.Vector2(0.5, 0.5) },
        },
        vertexShader: `
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec2 resolution;
          uniform vec2 mousePosition;
          varying vec2 vUv;
          
          #define PI 3.14159265359
          
          float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u*u*(3.0-2.0*u);
            
            float res = mix(
              mix(sin(dot(ip, vec2(13.1, 7.8))), 
                  sin(dot(ip + vec2(1.0, 0.0), vec2(13.1, 7.8))), u.x),
              mix(sin(dot(ip + vec2(0.0, 1.0), vec2(13.1, 7.8))), 
                  sin(dot(ip + vec2(1.0, 1.0), vec2(13.1, 7.8))), u.x), u.y);
            return res * 0.5 + 0.5;
          }
          
          void main() {
            vec2 uv = vUv;
            vec2 center = vec2(0.5, 0.5);
            
            // Create a dynamic center based on mouse position
            vec2 dynamicCenter = mix(center, mousePosition, 0.3);
            
            // Calculate distance from center
            float dist = distance(uv, dynamicCenter);
            
            // Create multiple layers of noise
            float n1 = noise(uv * 3.0 + time * 0.1);
            float n2 = noise(uv * 6.0 - time * 0.15);
            float n3 = noise(uv * 12.0 + time * 0.2);
            
            // Combine noise layers
            float finalNoise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
            
            // Create a gradient from center
            float gradient = smoothstep(0.0, 1.5, dist);
            
            // Create color palette - darker tones
            vec3 color1 = vec3(0.25, 0.8, 0.65); // Darker teal
            vec3 color2 = vec3(0.35, 0.15, 0.7); // Darker purple
            vec3 color3 = vec3(0.05, 0.45, 0.7); // Darker blue
            
            // Mix colors based on noise and gradient
            vec3 finalColor = mix(
              mix(color2, color1, finalNoise),
              vec3(0.0, 0.0, 0.0),
              gradient
            );
            
            // Add subtle pulsing glow at center
            float pulse = (sin(time * 0.5) * 0.5 + 0.5) * 0.5;
            float glow = smoothstep(0.8, 0.0, dist) * pulse;
            finalColor += color3 * glow;
            
            // Add vertical gradient to fade to black at bottom
            float verticalGradient = smoothstep(0.0, 1.0, uv.y * 1.5 - 0.5);
            finalColor = mix(vec3(0.0, 0.0, 0.0), finalColor, verticalGradient);
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,
        transparent: true,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.z = -10
      scene.add(mesh)

      return { mesh, material }
    }

    const background = createBackgroundShader()

    // Rest of the Three.js code remains the same...
    // (I'm keeping the existing Three.js implementation for the 3D effects)

    // Create a particle system for the starfield
    const createStarfield = () => {
      const particleCount = isMobile ? 1000 : 2000
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)
      const colors = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        // Position stars in a sphere
        const radius = Math.random() * 50 + 10
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = radius * Math.cos(phi)

        // Random star sizes
        sizes[i] = Math.random() * 2 + 0.5

        // Star colors - mostly white with some colored stars
        if (Math.random() > 0.8) {
          // Teal, purple, or blue stars
          const colorChoice = Math.floor(Math.random() * 3)
          if (colorChoice === 0) {
            // Teal
            colors[i3] = 0.39
            colors[i3 + 1] = 1.0
            colors[i3 + 2] = 0.85
          } else if (colorChoice === 1) {
            // Purple
            colors[i3] = 0.49
            colors[i3 + 1] = 0.23
            colors[i3 + 2] = 0.93
          } else {
            // Blue
            colors[i3] = 0.05
            colors[i3 + 1] = 0.65
            colors[i3 + 2] = 0.91
          }
        } else {
          // White stars
          colors[i3] = 1.0
          colors[i3 + 1] = 1.0
          colors[i3 + 2] = 1.0
        }
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          uniform float time;
          uniform float pixelRatio;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            
            // Add subtle movement to stars
            vec3 pos = position;
            float dist = length(pos);
            float angle = time * (0.1 / dist);
            
            float x = pos.x * cos(angle) - pos.z * sin(angle);
            float z = pos.z * cos(angle) + pos.x * sin(angle);
            
            pos.x = x;
            pos.z = z;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            
            // Size attenuation
            gl_PointSize = size * (30.0 / -mvPosition.z) * pixelRatio;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            // Create circular points
            vec2 center = gl_PointCoord - 0.5;
            float dist = length(center);
            if (dist > 0.5) discard;
            
            // Add radial gradient
            float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
            gl_FragColor = vec4(vColor, opacity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      return { particles, material }
    }

    const starfield = createStarfield()

    // Create the main group for all objects
    const mainGroup = new THREE.Group()
    // Scale up the entire main group by 1/5 from previous size
    const mainScale = 0.72 // 0.6 * 1.2 = 0.72
    mainGroup.scale.set(mainScale, mainScale, mainScale)
    scene.add(mainGroup)

    // Create a data sphere visualization
    const createDataSphere = () => {
      const group = new THREE.Group()

      // Create the core sphere
      const coreGeometry = new THREE.IcosahedronGeometry(5, 2)
      const coreMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          baseColor: { value: new THREE.Color(0x6028c9) }, // Darker purple
          glowColor: { value: new THREE.Color(0x4cd9b0) }, // Darker teal
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 baseColor;
          uniform vec3 glowColor;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            // Calculate fresnel effect
            vec3 viewDirection = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);
            
            // Add pulsing effect
            float pulse = sin(time * 0.5) * 0.5 + 0.5;
            
            // Create energy lines effect
            float lineWidth = 0.05;
            float lineFrequency = 10.0;
            float linePattern = abs(sin(vPosition.y * lineFrequency + time * 2.0));
            float lines = smoothstep(1.0 - lineWidth, 1.0, linePattern);
            
            // Combine effects
            vec3 finalColor = mix(baseColor, glowColor, fresnel * pulse + lines * 0.5);
            
            gl_FragColor = vec4(finalColor, 0.9);
          }
        `,
        transparent: true,
      })

      const core = new THREE.Mesh(coreGeometry, coreMaterial)
      group.add(core)

      // Create outer glow
      const glowGeometry = new THREE.SphereGeometry(5.5, 32, 32)
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          glowColor: { value: new THREE.Color(0x7c3aed) },
        },
        vertexShader: `
          varying vec3 vNormal;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 glowColor;
          varying vec3 vNormal;
          
          void main() {
            // Calculate view direction
            vec3 viewDirection = normalize(cameraPosition - vec3(modelViewMatrix * vec4(position, 1.0)));
            float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
            
            // Add pulsing
            float pulse = sin(time * 0.3) * 0.5 + 0.5;
            
            // Final color
            vec3 finalColor = glowColor * fresnel * pulse;
            float alpha = fresnel * 0.5 * pulse;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      group.add(glow)

      // Create data nodes on the sphere
      const nodeCount = isMobile ? 30 : 50
      const nodes = []

      for (let i = 0; i < nodeCount; i++) {
        // Create node at random position on sphere
        const phi = Math.acos(2 * Math.random() - 1)
        const theta = Math.random() * Math.PI * 2
        const radius = 5

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        const nodeGeometry = new THREE.SphereGeometry(0.15, 16, 16)
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0x64ffda : 0x0ea5e9,
          transparent: true,
          opacity: 0.8,
        })

        const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
        node.position.set(x, y, z)

        // Store node data
        node.userData = {
          originalPosition: new THREE.Vector3(x, y, z),
          pulseSpeed: Math.random() * 2 + 1,
          pulseIntensity: Math.random() * 0.3 + 0.1,
          active: false,
          activationTime: 0,
          color: nodeMaterial.color.clone(),
        }

        group.add(node)
        nodes.push(node)
      }

      mainGroup.add(group)

      return { group, core, glow, nodes }
    }

    const dataSphere = createDataSphere()

    // Create more natural energy rings around the sphere
    const createEnergyRings = () => {
      const rings = []
      const ringCount = 4 // Add one more ring for more natural look

      // Base radius and spacing
      const baseRadius = 7
      const baseSpacing = 2.2

      for (let i = 0; i < ringCount; i++) {
        // Create more natural variations in ring sizes and positions
        const radiusVariation = Math.random() * 0.5 - 0.25 // Small random variation
        const radius = baseRadius + i * baseSpacing + radiusVariation

        // Vary the thickness of each ring
        const thickness = Math.random() * 0.15 + 0.05
        const geometry = new THREE.RingGeometry(radius - thickness, radius + thickness, 128)

        // Create a more natural color palette for rings
        let ringColor
        if (i === 0) {
          ringColor = 0x4cd9b0 // Teal
        } else if (i === 1) {
          ringColor = 0x6028c9 // Purple
        } else if (i === 2) {
          ringColor = 0x0a91d0 // Blue
        } else {
          ringColor = 0x7c3aed // Another purple shade
        }

        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            baseColor: { value: new THREE.Color(ringColor) },
            noiseFreq: { value: Math.random() * 3 + 2 }, // Random frequency for each ring
          },
          vertexShader: `
            varying vec2 vUv;
            
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 baseColor;
            uniform float noiseFreq;
            varying vec2 vUv;
            
            // Simple noise function
            float noise(float x) {
              return sin(x) * 0.5 + 0.5;
            }
            
            void main() {
              // Create flowing energy effect with more natural variations
              float flow = fract(vUv.x * noiseFreq - time * (0.3 + sin(time * 0.1) * 0.1));
              float intensity = smoothstep(0.0, 0.1, flow) * smoothstep(1.0, 0.9, flow);
              
              // Add pulsing with slight variation
              float pulse = sin(time * 0.3 + vUv.x * 6.28) * 0.5 + 0.5;
              
              // Add some noise to make it less uniform
              float noiseVal = noise(vUv.x * 20.0 + time);
              
              // Final color with more natural variations
              vec3 finalColor = baseColor * (intensity * 2.0 + 0.2 + pulse * 0.3 + noiseVal * 0.1);
              
              // Vary opacity along the ring for more natural look
              float alpha = intensity * 0.6 + 0.1 + noiseVal * 0.05;
              
              gl_FragColor = vec4(finalColor, alpha);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })

        const ring = new THREE.Mesh(geometry, material)

        // Set more natural rotation angles
        // Tilt rings at different angles for more natural look
        ring.rotation.x = Math.PI / 2 + (Math.random() * 0.3 - 0.15)
        ring.rotation.y = Math.random() * Math.PI
        ring.rotation.z = Math.random() * 0.2 - 0.1

        // Store ring data with more natural movement parameters
        ring.userData = {
          rotationSpeed: (Math.random() * 0.05 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
          wobbleSpeed: Math.random() * 0.01 + 0.005,
          wobbleAmount: Math.random() * 0.05 + 0.02,
          initialRotation: {
            x: ring.rotation.x,
            y: ring.rotation.y,
            z: ring.rotation.z,
          },
        }

        mainGroup.add(ring)
        rings.push(ring)
      }

      return rings
    }

    const energyRings = createEnergyRings()

    // Create data flow particles
    const createDataFlow = () => {
      const particleCount = isMobile ? 200 : 400
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)
      const colors = new Float32Array(particleCount * 3)
      const speeds = new Float32Array(particleCount)
      const offsets = new Float32Array(particleCount)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        // Random position in sphere - adjusted for larger scale
        const radius = Math.random() * 12 + 5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i3 + 2] = radius * Math.cos(phi)

        // Random sizes
        sizes[i] = Math.random() * 0.5 + 0.1

        // Random colors - teal, purple, or blue
        const colorChoice = Math.floor(Math.random() * 3)
        if (colorChoice === 0) {
          // Teal
          colors[i3] = 0.39
          colors[i3 + 1] = 1.0
          colors[i3 + 2] = 0.85
        } else if (colorChoice === 1) {
          // Purple
          colors[i3] = 0.49
          colors[i3 + 1] = 0.23
          colors[i3 + 2] = 0.93
        } else {
          // Blue
          colors[i3] = 0.05
          colors[i3 + 1] = 0.65
          colors[i3 + 2] = 0.91
        }

        // Random speeds and offsets
        speeds[i] = Math.random() * 0.5 + 0.2
        offsets[i] = Math.random() * Math.PI * 2
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute("speed", new THREE.BufferAttribute(speeds, 1))
      geometry.setAttribute("offset", new THREE.BufferAttribute(offsets, 1))

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          attribute float speed;
          attribute float offset;
          uniform float time;
          uniform float pixelRatio;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            
            // Calculate flow path
            vec3 pos = position;
            float dist = length(pos);
            
            // Flow along spiral paths
            float angle = offset + time * speed;
            float x = pos.x * cos(angle) - pos.z * sin(angle);
            float z = pos.z * cos(angle) + pos.x * sin(angle);
            
            // Add vertical oscillation
            float y = pos.y + sin(time * speed + offset) * 0.5;
            
            vec3 newPos = vec3(x, y, z);
            
            vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
            
            // Size attenuation
            gl_PointSize = size * (30.0 / -mvPosition.z) * pixelRatio;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            // Create circular points
            vec2 center = gl_PointCoord - 0.5;
            float dist = length(center);
            if (dist > 0.5) discard;
            
            // Add radial gradient
            float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
            gl_FragColor = vec4(vColor, opacity);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })

      const particles = new THREE.Points(geometry, material)
      mainGroup.add(particles)

      return { particles, material }
    }

    const dataFlow = createDataFlow()

    // Create energy bursts
    const createEnergyBursts = () => {
      const burstCount = 5
      const bursts = []

      for (let i = 0; i < burstCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16)
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(i % 3 === 0 ? 0x64ffda : i % 3 === 1 ? 0x7c3aed : 0x0ea5e9) },
            progress: { value: 0 },
          },
          vertexShader: `
            varying vec3 vNormal;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            uniform vec3 color;
            uniform float progress;
            varying vec3 vNormal;
            
            void main() {
              // Calculate fresnel effect
              vec3 viewDirection = normalize(cameraPosition - vec3(modelViewMatrix * vec4(position, 1.0)));
              float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
              
              // Fade out based on progress
              float opacity = (1.0 - progress) * fresnel;
              
              gl_FragColor = vec4(color, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })

        const burst = new THREE.Mesh(geometry, material)
        burst.visible = false
        burst.userData = {
          active: false,
          progress: 0,
          speed: Math.random() * 0.5 + 0.5,
          startPosition: new THREE.Vector3(),
          targetPosition: new THREE.Vector3(),
        }

        mainGroup.add(burst)
        bursts.push(burst)
      }

      return bursts
    }

    const energyBursts = createEnergyBursts()

    // Trigger energy burst
    const triggerEnergyBurst = (startPos, targetPos, color) => {
      // Find inactive burst
      const availableBurst = energyBursts.find((burst) => !burst.userData.active)
      if (!availableBurst) return

      // Set burst properties
      availableBurst.position.copy(startPos)
      availableBurst.userData.active = true
      availableBurst.userData.progress = 0
      availableBurst.userData.startPosition.copy(startPos)
      availableBurst.userData.targetPosition.copy(targetPos)
      availableBurst.material.uniforms.color.value.set(color)
      availableBurst.material.uniforms.progress.value = 0
      availableBurst.visible = true
      availableBurst.scale.set(1, 1, 1)
    }

    // Activate random data node
    const activateRandomNode = () => {
      // Select random node
      const node = dataSphere.nodes[Math.floor(Math.random() * dataSphere.nodes.length)]
      if (node.userData.active) return

      // Activate node
      node.userData.active = true
      node.userData.activationTime = clock.getElapsedTime()
      node.material.color.set(0xffffff)
      node.material.opacity = 1

      // Scale up node
      node.scale.set(1.5, 1.5, 1.5)

      // Trigger energy burst to another random node
      const targetNode = dataSphere.nodes[Math.floor(Math.random() * dataSphere.nodes.length)]
      if (node !== targetNode) {
        triggerEnergyBurst(node.position.clone(), targetNode.position.clone(), node.userData.color)
      }

      // Reset node after delay
      setTimeout(
        () => {
          node.userData.active = false
          node.material.color.copy(node.userData.color)
          node.material.opacity = 0.8
          node.scale.set(1, 1, 1)
        },
        Math.random() * 1000 + 500,
      )
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1

      // Update shader uniform
      if (background.material.uniforms) {
        background.material.uniforms.mousePosition.value.x = event.clientX / window.innerWidth
        background.material.uniforms.mousePosition.value.y = 1 - event.clientY / window.innerHeight
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()
    let lastNodeActivation = 0

    const animate = () => {
      requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Update shader uniforms
      if (background.material.uniforms) {
        background.material.uniforms.time.value = elapsedTime
      }

      if (starfield.material.uniforms) {
        starfield.material.uniforms.time.value = elapsedTime
      }

      // Update data sphere
      if (dataSphere.core.material.uniforms) {
        dataSphere.core.material.uniforms.time.value = elapsedTime
      }

      if (dataSphere.glow.material.uniforms) {
        dataSphere.glow.material.uniforms.time.value = elapsedTime
      }

      // Update data nodes
      dataSphere.nodes.forEach((node) => {
        if (!node.userData.active) {
          // Pulse effect
          const pulse = Math.sin(elapsedTime * node.userData.pulseSpeed) * node.userData.pulseIntensity + 1
          node.scale.set(pulse, pulse, pulse)
        }
      })

      // Rotate data sphere based on mouse position
      dataSphere.group.rotation.y = elapsedTime * 0.1 + mouseX * 0.5
      dataSphere.group.rotation.x = Math.sin(elapsedTime * 0.05) * 0.2 + mouseY * 0.2

      // Update energy rings with more natural movement
      energyRings.forEach((ring) => {
        if (ring.material.uniforms) {
          ring.material.uniforms.time.value = elapsedTime
        }

        // Apply more natural rotation and wobble
        ring.rotation.z += ring.userData.rotationSpeed

        // Add subtle wobble for more natural movement
        const wobble = Math.sin(elapsedTime * ring.userData.wobbleSpeed) * ring.userData.wobbleAmount
        ring.rotation.x = ring.userData.initialRotation.x + wobble
        ring.rotation.y = ring.userData.initialRotation.y + wobble * 0.5
      })

      // Update data flow
      if (dataFlow.material.uniforms) {
        dataFlow.material.uniforms.time.value = elapsedTime
      }

      // Update energy bursts
      energyBursts.forEach((burst) => {
        if (burst.userData.active) {
          // Update progress
          burst.userData.progress += burst.userData.speed * 0.01
          burst.material.uniforms.progress.value = burst.userData.progress

          // Move along path
          const t = burst.userData.progress
          burst.position.lerpVectors(burst.userData.startPosition, burst.userData.targetPosition, t)

          // Scale up as it moves
          const burstScale = 1 + t * 3
          burst.scale.set(burstScale, burstScale, burstScale)

          // Deactivate when complete
          if (burst.userData.progress >= 1) {
            burst.userData.active = false
            burst.visible = false
          }
        }
      })

      // Activate random nodes
      if (elapsedTime - lastNodeActivation > Math.random() * 0.5 + 0.2) {
        activateRandomNode()
        lastNodeActivation = elapsedTime
      }

      // Gentle camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 2
      camera.position.y = Math.cos(elapsedTime * 0.1) * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Update uniforms
      if (background.material.uniforms) {
        background.material.uniforms.resolution.value.x = window.innerWidth
        background.material.uniforms.resolution.value.y = window.innerHeight
      }

      if (starfield.material.uniforms) {
        starfield.material.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2)
      }

      if (dataFlow.material.uniforms) {
        dataFlow.material.uniforms.pixelRatio.value = Math.min(window.devicePixelRatio, 2)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      // Clean up resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (object.material.map) object.material.map.dispose()
            object.material.dispose()
          }
        }
      })
    }
  }, [isMobile])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="inspira-container relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="inspira-gradient-text">Orbit Cipher</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-8">
          A decentralized science platform for space medical data, powered by blockchain technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/OrbitCipher/OrbitCipher"
            target="_blank"
            rel="noopener noreferrer"
            className="inspira-button-primary px-8 py-3 text-lg"
          >
            Explore Platform
          </a>
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="inspira-button-secondary px-8 py-3 text-lg flex items-center justify-center"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  )
}
