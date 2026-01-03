import * as THREE from 'three'
const scene = new THREE.Scene()
// Initialize container 
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
// Initialize color
const cubeMaterial = new THREE.MeshBasicMaterial({color: "blue"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
// Add or place object into container
scene.add(cubeMesh)
// initialize camera | angle, aspact-ratio, min-distance, max-distance | camera is like human eye
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
)

// positioned camera far from the object
camera.position.z = 5

// initialize rendering 
const canvas = document.querySelector('canvas.threejs')

const renderer = new THREE.WebGLRenderer({
  canvas:canvas
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)


