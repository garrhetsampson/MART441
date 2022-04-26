var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



/* Create Lights: PointLight / SpotLight etc.*/
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100,100,100);
spotLight.castShadow = true;

spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;
spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;
scene.add(spotLight);

/* Create Material */
function Mat(){
  var material = new THREE.MeshPhongMaterial({
    color      : new THREE.Color("rgb(35,35,213)"), 
    emissive   : new THREE.Color("rgb(64,128,255)"),
    specular   : new THREE.Color("rgb(93,195,255)"), 
	  
    shininess  : 1,                                  
	  
    shading    : THREE.FlatShading,                 
	  
    wireframe  : 1,                                 
    transparent: 1,
    opacity    : 0.25                                
  });
  return material;
}

/* Create Geometry */
var geometry = new THREE.SphereGeometry(50,20,20,0,Math.PI*2,0,Math.PI);
//SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)

/* Create Earth Sphere*/
var earth = new THREE.Mesh(geometry, Mat());


scene.add(earth);

camera.position.z = 90;



function render(){
  requestAnimationFrame(render);
  earth.rotation.x += 0.01;
  earth.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();