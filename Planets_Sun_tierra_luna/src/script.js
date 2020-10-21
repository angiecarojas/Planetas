
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	45, 
	window.innerWidth / window.innerHeight, 
	0.1, 
	1000);
var renderer = new THREE.WebGLRenderer();
var tierra;
var transformacionTierra;
var step=0;
var stepluna=0;
var stepS=0;
var stepsun=0;
var mvluna=true;
var mvsun=true;
var sol;

main();

function renderScene() {

	step+=0.01;
	if(mvluna) stepluna+=0.015;
	else stepluna-=0.01;
	tierra.animar(step,stepluna);
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);

	stepS+=0.01;
	if(mvsun) stepsun+=0.15;
	else stepsun-=0.01;
	sol.animar2(stepS,stepsun);
	requestAnimationFrame(renderScene);
	renderer.render(scene, camera);
}
function main() {

	renderer.setClearColor("#FFFFFF",1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapEnabled = false; //no shadow casting
	renderer.setSize(window.innerWidth, window.innerHeight);

//add sol
	sol = new Sun(6,'texture/sun.jpg');
	sol.draw(scene);
	

//Add planeta
	tierra= new Planeta(4,'texture/tierra.jpg',25);
	sol.addPlaneta(tierra);//añadimos la tierra al sol


//Add satelite
	luna= new Satelite(2,'texture/moon.gif',10);
	tierra.addSatelite(luna);//añadimos la luna a la tierra


//añadimos la luz
var pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 0,0,0 );
pointLight.castShadow=true;
scene.add( pointLight );



// Añadir camara
camera.position.x = -52;
camera.position.y = 10;
camera.position.z = 30;
camera.lookAt(scene.position);


$("#canvas").append(renderer.domElement);

renderScene();
}

