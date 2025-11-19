import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';
import { faceMapping } from './data.js';
import { generateFaceTexture } from './textures.js';

let scene, camera, renderer, cube, controls, raycaster, mouse;
let particles;
let isDragging = false;
let container;
let animationFrameId;

export function initScene(domContainerId) {
  container = document.getElementById(domContainerId);
  

  scene = new THREE.Scene();

  scene.background = new THREE.Color(0x050505); 
  scene.fog = new THREE.FogExp2(0x050505, 0.002);


  camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 32;


  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
  container.appendChild(renderer.domElement);


  const geometry = new THREE.BoxGeometry(12, 12, 12);

  const materials = faceMapping.map(face => {
    const canvas = generateFaceTexture(face.title, "View", face.color);
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.4,
        metalness: 0.1
    });
  });

  cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);


  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.1 });
  const wireframe = new THREE.LineSegments(edges, lineMaterial);
  wireframe.scale.set(1.02, 1.02, 1.02);
  cube.add(wireframe);


  createParticles();


  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  
  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(10, 20, 20);
  scene.add(mainLight);

  const accentLight = new THREE.PointLight(0x00ff88, 1, 50);
  accentLight.position.set(-10, -10, 10);
  scene.add(accentLight);


  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.rotateSpeed = 0.8;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;


  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();


  window.addEventListener('resize', onWindowResize);
  

  let mouseDownTime = 0;
  renderer.domElement.addEventListener('pointerdown', () => { 
      isDragging = false;
      mouseDownTime = Date.now();
      controls.autoRotate = false; // Pause on interaction
  });
  
  renderer.domElement.addEventListener('pointermove', () => { 
      isDragging = true; 
  });
  
  renderer.domElement.addEventListener('pointerup', (e) => {
      const clickDuration = Date.now() - mouseDownTime;


      if (clickDuration < 200) {
          onMouseClick(e);
      }
      

      setTimeout(() => {
          if(!isDragging) controls.autoRotate = true;
      }, 3000);
  });

  animate();
}

function createParticles() {
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 300;
    const posArray = new Float32Array(count * 3);
    
    for(let i = 0; i < count * 3; i++) {

        posArray[i] = (Math.random() - 0.5) * 60; 
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const material = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x00ff88,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    
    particles = new THREE.Points(particlesGeometry, material);
    scene.add(particles);
}

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function onMouseClick(event) {

  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(cube);

  if (intersects.length > 0) {
    const faceIndex = Math.floor(intersects[0].faceIndex / 2);

    if(faceIndex >= 0 && faceIndex < faceMapping.length) {
        const sectionId = faceMapping[faceIndex].id;



        const originalScale = cube.scale.clone();
        cube.scale.set(1.05, 1.05, 1.05);
        setTimeout(() => cube.scale.copy(originalScale), 150);

        const navigateEvent = new CustomEvent('navigate3d', { detail: sectionId });
        window.dispatchEvent(navigateEvent);
    }
  }
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
  
  controls.update();
  
  if (particles) {
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
  }
  
  renderer.render(scene, camera);
}
