import * as THREE from './three.module.js';
import { ARButton } from './ARButton.js';
import { GLTFLoader } from './GLTFLoader.js';

let camera, scene, renderer, controller;

init();
function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load('./models/model.glb', function (gltf) {
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        scene.add(gltf.scene);
    });

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    document.body.appendChild(ARButton.createButton(renderer));

    controller = renderer.xr.getController(0);
    scene.add(controller);

    renderer.setAnimationLoop(function () {
        renderer.render(scene, camera);
    });
}
