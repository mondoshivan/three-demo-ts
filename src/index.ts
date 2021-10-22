import * as THREE from "three"

// import css from "../static/main.css"

let camera:THREE.PerspectiveCamera
let scene:THREE.Scene
let renderer:THREE.WebGLRenderer
let mesh:THREE.Mesh

function init () {
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
  camera.position.z = 1

  scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
  const material = new THREE.MeshNormalMaterial()

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animation)
  document.body.appendChild(renderer.domElement)
}

function animation (time:number) {
  mesh.rotation.x = time / 2000
  mesh.rotation.y = time / 1000

  renderer.render(scene, camera)
}

function onWindowResize () {
  console.log("onWindowResize")
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener("resize", onWindowResize, false)

init()
