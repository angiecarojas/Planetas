var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var tierra;
var transformacionTierra;
var step=0;
var stepluna=0;
var mvluna=true;
var sol;

main();

function renderScene() {

	step+=0.01;
	if(mvluna) stepluna+=0.015;
	else stepluna-=0.01;
	tierra.animar(step,stepluna);
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}
function main() {

	renderer.setClearColor(0x000000,1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = false; //no shadow casting
	renderer.setSize(window.innerWidth, window.innerHeight);

//add sol
	sol = new Sun(6,'img/sun.jpg');
	sol.draw(scene);


//Add planeta
	tierra= new Planeta(4,'img/earth.jpg',25);
	sol.addPlaneta(tierra);//añadimos la tierra al sol


//Add satelite
	luna= new Satelite(2,'img/moon.gif',10);
	tierra.addSatelite(luna);//añadimos la luna a la tierra


//añadimos la luz
var pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 0,0,0 );
pointLight.castShadow=true;
scene.add( pointLight );



// Añadir camara
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);


$("#canvas").append(renderer.domElement);

renderScene();
}
