import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { markRaw } from 'vue';
import * as THREE from 'three';
import { defineStore } from 'pinia';

interface State {
  width: number;
  height: number;
  camera: THREE.PerspectiveCamera | null;
  controls: OrbitControls | null;
  scene: THREE.Scene | null;
  renderer: THREE.WebGLRenderer | null;
  pyramids: THREE.Mesh[];
}

export const useSceneStore = defineStore({
  id: 'sceneStore',

  state: (): State => ({
    width: 0,
    height: 0,
    camera: null,
    controls: null,
    scene: null,
    renderer: null,
    pyramids: [],
  }),

  actions: {
    setViewportSize({ width, height }: { width: number; height: number }) {
      this.width = width;
      this.height = height;
    },
    initializeRenderer(element: HTMLElement) {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(this.width, this.height);
      this.renderer = markRaw(renderer);
      element.appendChild(this.renderer.domElement);
    },
    initializeCamera() {
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 2000);
      camera.position.set(0, 400, 1000);
      this.camera = markRaw(camera);
    },
    initializeControls() {
      if (!this.camera || !this.renderer) {
        throw new Error('Camera or Renderer is not initialized');
      }
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.target.set(0, 350, 0);
      controls.autoRotate = true;
      this.controls = markRaw(controls);
    },
    initializeScene() {
      const loader = new OBJLoader();

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x121212);

      loader.load('FANUC_R2000iA165F.obj', (obj) => {
        obj.rotation.x = Math.PI / 2;
        obj.scale.set(0.25, 0.25, 0.25);
        scene.add(obj);
        if (this.camera) {
          this.renderer?.render(scene, this.camera);
        }
      });

      const lightA = new THREE.DirectionalLight(0xffffff);
      lightA.position.set(1000, 2000, 1000);
      scene.add(markRaw(lightA));
      const lightB = new THREE.DirectionalLight(0xffffff);
      lightB.position.set(-1000, 2000, 1000);
      scene.add(markRaw(lightB));
      const lightC = new THREE.AmbientLight(0x222222);
      scene.add(markRaw(lightC));

      this.scene = markRaw(scene);
    },
    init({
      width,
      height,
      element,
    }: {
      width: number;
      height: number;
      element: HTMLElement;
    }) {
      this.setViewportSize({ width, height });
      this.initializeRenderer(element);
      this.initializeCamera();
      this.initializeScene();
      this.initializeControls();

      // initial scene rendering
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera);
      }

      // add event listener that will re-render the scene when the controls change
      if (this.controls && this.renderer && this.scene && this.camera) {
        this.controls.addEventListener('change', () => {
          if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
          }
        });
      }
    },

    animate() {
      window.requestAnimationFrame(() => {
        this.animate();
        if (this.controls) {
          this.controls.update();
        }
      });
    },
  },

  getters: {
    dims(): number {
      return this.width;
    },
  },
});
