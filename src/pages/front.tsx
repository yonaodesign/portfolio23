import Head from 'next/head'

import styled from 'styled-components'

import {useState, useEffect} from 'react'
import * as THREE from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { DebugEnvironment } from 'three/addons/environments/DebugEnvironment.js';

const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;


const CanvasDiv = styled.div`
z-index: 10 !important;
position: fixed !important;
left: 0px;
top: 0px;
right: 0px;
bottom: 0px;`


interface HomeProps {
  user: object | null;
}

export default function FRONT({ user }: HomeProps): JSX.Element {
  const [isRendered, setIsRendered] = useState<boolean>(false)

  useEffect(()=>{
    if (isRendered === true) {
      console.log('Already Rendered, Sorry.')}
    if (isRendered === false) {
      console.log('Ok, rendering now')

}

const scene = new THREE.Scene()

const light = new THREE.PointLight()
light.position.set(10, 0, 0)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
)
camera.position.x = 10

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor( 0xe5e5e5, 1);
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
const objLoader = new OBJLoader()

objLoader.load(
    '/export_refined.obj',
    (object) => {
      object.rotation.y=5
      object.scale.z=1000
      object.scale.x=1000
      object.scale.y=1000
      
      scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    render()
    // stats.update()
}
function render() {
    renderer.render(scene, camera)
}
animate()
},[isRendered])

  return (
    <div>
        <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny is a developer, linguist and marketer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

        <CanvasDiv id="bg"></CanvasDiv>
        <script type="module" src="/animated3DStraw.js" async></script>

    </div>
  )
}



