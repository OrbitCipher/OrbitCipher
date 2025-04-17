"use client"

import { useRef, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import * as THREE from "three"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Architecture() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // 使用更广角的视野
    // 根据设备类型调整相机参数
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 85 : 75, // 移动设备使用更广角视野
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = isMobile ? 25 : 20 // 移动设备调整相机距离
    camera.position.y = 0 // 居中相机

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 创建主场景组
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 根据设备类型调整场景缩放
    const scaleValue = isMobile ? 1.2 : 1.5
    mainGroup.scale.set(scaleValue, scaleValue, scaleValue)

    // 创建星空背景 - 增加星星数量
    const starsGroup = new THREE.Group()
    mainGroup.add(starsGroup)

    const starGeometry = new THREE.BufferGeometry()
    const starCount = isMobile ? 500 : 1000 // 移动设备减少星星数量
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      starPositions[i3] = (Math.random() - 0.5) * 80 // 扩大分布范围
      starPositions[i3 + 1] = (Math.random() - 0.5) * 80
      starPositions[i3 + 2] = (Math.random() - 0.5) * 80
      starSizes[i] = Math.random() * 2
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1))

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15, // 增大星星尺寸
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    starsGroup.add(stars)

    // 创建多个DNA双螺旋结构
    const createDNAHelix = (posX, posY, posZ, rotation, scale) => {
      const dnaGroup = new THREE.Group()

      // 创建两条螺旋骨架
      const backboneGeometry = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(
          Array(100)
            .fill()
            .map((_, i) => {
              const angle = i * 0.2
              const x = Math.cos(angle) * 2
              const y = i * 0.1 - 5
              const z = Math.sin(angle) * 2
              return new THREE.Vector3(x, y, z)
            }),
        ),
        100,
        0.1,
        8,
        false,
      )

      const backboneMaterial1 = new THREE.MeshBasicMaterial({
        color: 0x64ffda,
        transparent: true,
        opacity: 0.8,
      })
      const backboneMaterial2 = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.8,
      })

      const backbone1 = new THREE.Mesh(backboneGeometry, backboneMaterial1)
      const backbone2 = new THREE.Mesh(backboneGeometry, backboneMaterial2)
      backbone2.rotation.y = Math.PI

      dnaGroup.add(backbone1)
      dnaGroup.add(backbone2)

      // 创建连接碱基对
      for (let i = 0; i < 20; i++) {
        const baseGeometry = new THREE.BoxGeometry(4, 0.1, 0.1)
        const baseMaterial = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x0ea5e9 : 0xffffff,
          transparent: true,
          opacity: 0.7,
        })

        const base = new THREE.Mesh(baseGeometry, baseMaterial)
        base.position.y = i * 0.5 - 5
        base.rotation.y = i * 0.2

        dnaGroup.add(base)
      }

      dnaGroup.position.set(posX, posY, posZ)
      dnaGroup.rotation.z = rotation
      dnaGroup.scale.set(scale, scale, scale)

      return dnaGroup
    }

    // 创建多个DNA螺旋，分布在场景不同位置
    const dnaHelix1 = createDNAHelix(-12, 0, -5, Math.PI / 6, 1)
    const dnaHelix2 = createDNAHelix(-8, -10, 2, Math.PI / 4, 0.8)
    const dnaHelix3 = createDNAHelix(-15, 8, 0, Math.PI / 3, 0.7)

    mainGroup.add(dnaHelix1)
    mainGroup.add(dnaHelix2)
    mainGroup.add(dnaHelix3)

    // 创建多个区块链结构
    const createBlockchain = (posX, posY, posZ, numBlocks, scale) => {
      const blockchainGroup = new THREE.Group()

      for (let i = 0; i < numBlocks; i++) {
        // 创建区块
        const blockGeometry = new THREE.BoxGeometry(1.5, 1, 0.5)
        const blockMaterial = new THREE.MeshBasicMaterial({
          color: 0x7c3aed,
          transparent: true,
          opacity: 0.7,
          wireframe: false,
        })

        const block = new THREE.Mesh(blockGeometry, blockMaterial)
        block.position.y = -i * 2

        // 添加区块内部数据可视化
        const dataGeometry = new THREE.PlaneGeometry(1.2, 0.7)
        const dataMaterial = new THREE.MeshBasicMaterial({
          color: 0x0ea5e9,
          transparent: true,
          opacity: 0.5,
          wireframe: true,
        })

        const dataPlane = new THREE.Mesh(dataGeometry, dataMaterial)
        dataPlane.position.z = 0.26
        block.add(dataPlane)

        // 添加连接线
        if (i > 0) {
          const lineGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8)
          const lineMaterial = new THREE.MeshBasicMaterial({
            color: 0x64ffda,
            transparent: true,
            opacity: 0.8,
          })

          const line = new THREE.Mesh(lineGeometry, lineMaterial)
          line.position.y = -i * 2 + 1
          line.rotation.x = Math.PI / 2

          blockchainGroup.add(line)
        }

        blockchainGroup.add(block)
      }

      blockchainGroup.position.set(posX, posY, posZ)
      blockchainGroup.scale.set(scale, scale, scale)

      return blockchainGroup
    }

    // 创建多个区块链，分布在场景不同位置
    const blockchain1 = createBlockchain(12, -1, 0, 6, 1)
    const blockchain2 = createBlockchain(15, 5, -3, 4, 0.8)
    const blockchain3 = createBlockchain(10, -8, -2, 5, 0.9)

    mainGroup.add(blockchain1)
    mainGroup.add(blockchain2)
    mainGroup.add(blockchain3)

    // 创建多个数据球
    const createDataSphere = (posX, posY, posZ, radius, scale) => {
      const dataSphereGroup = new THREE.Group()

      // 创建核心数据球
      const sphereGeometry = new THREE.SphereGeometry(radius, 32, 32)
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.3,
        wireframe: true,
      })

      const dataSphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      dataSphereGroup.add(dataSphere)

      // 添加数据点
      const numPoints = Math.floor(radius * 30) // 根据球体大小调整点的数量
      for (let i = 0; i < numPoints; i++) {
        const dataPointGeometry = new THREE.SphereGeometry(0.08, 16, 16)
        const dataPointMaterial = new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0x64ffda : i % 3 === 1 ? 0x7c3aed : 0xffffff,
        })

        const dataPoint = new THREE.Mesh(dataPointGeometry, dataPointMaterial)

        // 在球面上随机分布
        const phi = Math.acos(-1 + Math.random() * 2)
        const theta = Math.random() * Math.PI * 2

        dataPoint.position.x = radius * Math.sin(phi) * Math.cos(theta)
        dataPoint.position.y = radius * Math.sin(phi) * Math.sin(theta)
        dataPoint.position.z = radius * Math.cos(phi)

        // 添加数据点的动画参数
        dataPoint.userData = {
          originalPosition: dataPoint.position.clone(),
          pulseFactor: Math.random() * 0.2 + 0.1,
          pulseSpeed: Math.random() * 2 + 1,
        }

        dataSphereGroup.add(dataPoint)
      }

      dataSphereGroup.position.set(posX, posY, posZ)
      dataSphereGroup.scale.set(scale, scale, scale)

      return dataSphereGroup
    }

    // 创建多个数据球，分布在场景不同位置
    const dataSphere1 = createDataSphere(0, 2, 0, 1.5, 1)
    const dataSphere2 = createDataSphere(-5, -5, -2, 1, 0.8)
    const dataSphere3 = createDataSphere(5, 8, -3, 1.2, 0.9)

    mainGroup.add(dataSphere1)
    mainGroup.add(dataSphere2)
    mainGroup.add(dataSphere3)

    // 创建连接线 - 从DNA到数据球
    const createConnections = () => {
      // DNA到数据球的连接
      const createDNAToSphereConnections = (dnaPos, spherePos, count) => {
        for (let i = 0; i < count; i++) {
          const startY = i * 1 - 3 + dnaPos.y

          const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(dnaPos.x, startY, dnaPos.z),
            new THREE.Vector3((dnaPos.x + spherePos.x) * 0.3, startY + 2, (dnaPos.z + spherePos.z) * 0.3 + 2),
            new THREE.Vector3((dnaPos.x + spherePos.x) * 0.7, spherePos.y, (dnaPos.z + spherePos.z) * 0.7 - 2),
            new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z),
          )

          const points = curve.getPoints(50)
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x64ffda,
            transparent: true,
            opacity: 0.4,
          })

          const line = new THREE.Line(lineGeometry, lineMaterial)
          mainGroup.add(line)
        }
      }

      // 数据球到区块链的连接
      const createSphereToBlockchainConnections = (spherePos, blockchainPos, count) => {
        for (let i = 0; i < count; i++) {
          const endY = -i * 2 - 1 + blockchainPos.y

          const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z),
            new THREE.Vector3(
              (spherePos.x + blockchainPos.x) * 0.3,
              spherePos.y,
              (spherePos.z + blockchainPos.z) * 0.3 + 2,
            ),
            new THREE.Vector3(
              (spherePos.x + blockchainPos.x) * 0.7,
              endY + 2,
              (spherePos.z + blockchainPos.z) * 0.7 - 2,
            ),
            new THREE.Vector3(blockchainPos.x, endY, blockchainPos.z),
          )

          const points = curve.getPoints(50)
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

          const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x7c3aed,
            transparent: true,
            opacity: 0.4,
          })

          const line = new THREE.Line(lineGeometry, lineMaterial)
          mainGroup.add(line)
        }
      }

      // 创建各个元素之间的连接
      createDNAToSphereConnections(dnaHelix1.position, dataSphere1.position, 3)
      createDNAToSphereConnections(dnaHelix2.position, dataSphere2.position, 2)
      createDNAToSphereConnections(dnaHelix3.position, dataSphere3.position, 2)

      createSphereToBlockchainConnections(dataSphere1.position, blockchain1.position, 3)
      createSphereToBlockchainConnections(dataSphere2.position, blockchain2.position, 2)
      createSphereToBlockchainConnections(dataSphere3.position, blockchain3.position, 2)
    }

    createConnections()

    // 创建数据流粒子效果
    const createDataFlowParticles = () => {
      const flowGroup = new THREE.Group()
      mainGroup.add(flowGroup)

      // 创建从DNA到数据球的数据流
      const createDNAToSphereFlow = (dnaPos, spherePos, count, color) => {
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
          const i3 = i * 3
          const t = Math.random()
          const startY = Math.random() * 6 - 3 + dnaPos.y

          const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(dnaPos.x, startY, dnaPos.z),
            new THREE.Vector3((dnaPos.x + spherePos.x) * 0.3, startY + 2, (dnaPos.z + spherePos.z) * 0.3 + 2),
            new THREE.Vector3((dnaPos.x + spherePos.x) * 0.7, spherePos.y, (dnaPos.z + spherePos.z) * 0.7 - 2),
            new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z),
          )

          const point = curve.getPoint(t)
          positions[i3] = point.x
          positions[i3 + 1] = point.y
          positions[i3 + 2] = point.z
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

        const material = new THREE.PointsMaterial({
          color,
          size: 0.1,
          transparent: true,
          opacity: 0.8,
        })

        const particles = new THREE.Points(geometry, material)
        particles.userData = {
          type: "flow",
          source: dnaPos.clone(),
          target: spherePos.clone(),
          count,
        }

        flowGroup.add(particles)
      }

      // 创建从数据球到区块链的数据流
      const createSphereToBlockchainFlow = (spherePos, blockchainPos, count, color) => {
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
          const i3 = i * 3
          const t = Math.random()
          const endY = Math.floor(Math.random() * 4) * -2 - 1 + blockchainPos.y

          const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z),
            new THREE.Vector3(
              (spherePos.x + blockchainPos.x) * 0.3,
              spherePos.y,
              (spherePos.z + blockchainPos.z) * 0.3 + 2,
            ),
            new THREE.Vector3(
              (spherePos.x + blockchainPos.x) * 0.7,
              endY + 2,
              (spherePos.z + blockchainPos.z) * 0.7 - 2,
            ),
            new THREE.Vector3(blockchainPos.x, endY, blockchainPos.z),
          )

          const point = curve.getPoint(t)
          positions[i3] = point.x
          positions[i3 + 1] = point.y
          positions[i3 + 2] = point.z
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

        const material = new THREE.PointsMaterial({
          color,
          size: 0.1,
          transparent: true,
          opacity: 0.8,
        })

        const particles = new THREE.Points(geometry, material)
        particles.userData = {
          type: "flow",
          source: spherePos.clone(),
          target: blockchainPos.clone(),
          count,
          isBlockchainFlow: true,
        }

        flowGroup.add(particles)
      }

      // 创建各个元素之间的数据流
      const particleCount = isMobile ? 20 : 50
      const smallParticleCount = isMobile ? 15 : 30

      createDNAToSphereFlow(dnaHelix1.position, dataSphere1.position, particleCount, 0x64ffda)
      createDNAToSphereFlow(dnaHelix2.position, dataSphere2.position, smallParticleCount, 0x64ffda)
      createDNAToSphereFlow(dnaHelix3.position, dataSphere3.position, smallParticleCount, 0x64ffda)

      createSphereToBlockchainFlow(dataSphere1.position, blockchain1.position, particleCount, 0x7c3aed)
      createSphereToBlockchainFlow(dataSphere2.position, blockchain2.position, smallParticleCount, 0x7c3aed)
      createSphereToBlockchainFlow(dataSphere3.position, blockchain3.position, smallParticleCount, 0x7c3aed)

      return flowGroup
    }

    const dataFlowParticles = createDataFlowParticles()

    // 动画
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // 旋转星空
      starsGroup.rotation.y = elapsedTime * 0.02
      starsGroup.rotation.x = elapsedTime * 0.01

      // 旋转DNA
      dnaHelix1.rotation.y = elapsedTime * 0.5
      dnaHelix2.rotation.y = elapsedTime * 0.4
      dnaHelix3.rotation.y = elapsedTime * 0.6

      // 旋转数据球
      dataSphere1.children[0].rotation.y = elapsedTime * 0.2
      dataSphere1.children[0].rotation.x = elapsedTime * 0.1
      dataSphere2.children[0].rotation.y = elapsedTime * 0.25
      dataSphere2.children[0].rotation.x = elapsedTime * 0.15
      dataSphere3.children[0].rotation.y = elapsedTime * 0.3
      dataSphere3.children[0].rotation.x = elapsedTime * 0.2

      // 数据点脉冲效果
      const updateSpherePoints = (sphere) => {
        sphere.children.forEach((child, index) => {
          if (index > 0 && child.userData) {
            const { originalPosition, pulseFactor, pulseSpeed } = child.userData
            const scale = 1 + Math.sin(elapsedTime * pulseSpeed) * pulseFactor

            child.position.x = originalPosition.x * scale
            child.position.y = originalPosition.y * scale
            child.position.z = originalPosition.z * scale
          }
        })
      }

      updateSpherePoints(dataSphere1)
      updateSpherePoints(dataSphere2)
      updateSpherePoints(dataSphere3)

      // 数据流动画
      dataFlowParticles.children.forEach((particles) => {
        if (particles.userData.type === "flow") {
          const { source, target, count, isBlockchainFlow } = particles.userData
          const positions = particles.geometry.attributes.position.array

          for (let i = 0; i < count; i++) {
            const i3 = i * 3
            // 移动每个粒子
            const t = (elapsedTime * 0.5 + i / count) % 1

            let endY = target.y
            if (isBlockchainFlow) {
              endY = Math.floor(i % 4) * -2 - 1 + target.y
            }

            const startY = isBlockchainFlow ? source.y : Math.random() * 6 - 3 + source.y

            const curve = new THREE.CubicBezierCurve3(
              new THREE.Vector3(source.x, startY, source.z),
              new THREE.Vector3(
                (source.x + target.x) * 0.3,
                isBlockchainFlow ? source.y : startY + 2,
                (source.z + target.z) * 0.3 + (isBlockchainFlow ? 0 : 2),
              ),
              new THREE.Vector3(
                (source.x + target.x) * 0.7,
                isBlockchainFlow ? endY + 2 : target.y,
                (source.z + target.z) * 0.7 + (isBlockchainFlow ? -2 : 0),
              ),
              new THREE.Vector3(target.x, endY, target.z),
            )

            const point = curve.getPoint(t)
            positions[i3] = point.x
            positions[i3 + 1] = point.y
            positions[i3 + 2] = point.z
          }

          particles.geometry.attributes.position.needsUpdate = true
        }
      })

      // 整体场景轻微摇摆
      mainGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // 处理窗口大小变化
    const handleResize = () => {
      if (!canvasRef.current) return

      const width = window.innerWidth
      const height = window.innerHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)

      // 根据设备类型调整相机位置
      if (isMobile) {
        camera.position.z = 25
        mainGroup.scale.set(1.2, 1.2, 1.2)
      } else {
        camera.position.z = 20
        mainGroup.scale.set(1.5, 1.5, 1.5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)

      // 清理资源
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material.map) object.material.map.dispose()
          object.material.dispose()
        }
      })

      renderer.dispose()
    }
  }, [])

  return (
    <section id="architecture" ref={sectionRef} className="py-20 relative min-h-[100vh]">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950/20 z-0"></div>

      {/* 全屏动画背景 */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
      </div>

      {/* 内容层 */}
      <div className="container px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Architecture</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive system designed for security, collaboration, and scientific advancement.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl backdrop-blur-sm bg-black/40 p-6 rounded-xl border border-purple-500/20 shadow-xl">
            <Tabs defaultValue="data" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/50 border border-purple-500/20 mb-6">
                <TabsTrigger value="data" className="data-[state=active]:bg-purple-900/30">
                  Data Management
                </TabsTrigger>
                <TabsTrigger value="analysis" className="data-[state=active]:bg-purple-900/30">
                  Analysis System
                </TabsTrigger>
                <TabsTrigger value="governance" className="data-[state=active]:bg-purple-900/30">
                  Governance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="data" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-teal-400">Hybrid Storage Architecture</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Sensitive medical data stored in encrypted form on high-performance distributed storage
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Only data metadata and access records stored on-chain
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Data hash anchored to blockchain to ensure immutability
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Implementation: Filecoin for distributed storage with IPFS addressing, Ethereum for data hash
                      storage
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-teal-400">Smart Access Control</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Role-based permission management system
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Granular data access control allowing astronauts to autonomously decide data sharing scope
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="analysis" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Data Analysis Workbench</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Online Jupyter notebook environment supporting Python/R analysis scripts
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Pre-configured space medicine analysis templates
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Selective publishing of analysis results
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-purple-400">Federated Learning Framework</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Privacy-preserving model training across distributed datasets
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      No-code interface for non-technical researchers
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Encrypted model parameter sharing
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="governance" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Progressive DAO Governance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Initially limited community voting focusing on core functionality optimization
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Gradually expanding community governance scope
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Governance participation tutorials and simplified voting interfaces
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-400">Multi-tier Token Economy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <strong>Foundation Tier:</strong> Core scientific data free to access
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <strong>Value-Added Tier:</strong> Advanced analysis tools requiring OBC tokens
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <strong>Contribution Tier:</strong> Data providers and analysis contributors rewarded with OBC
                      tokens
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
