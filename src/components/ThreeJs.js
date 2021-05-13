import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// const controls = new OrbitControls();

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// }
// animate();

// cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;

class ThreeJS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <h1>Hi</h1>
        </div> );
    }
}
 
export default ThreeJS;