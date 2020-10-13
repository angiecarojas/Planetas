function Sun(radius,textura){

	//conjunto de planetas
	this.planetas = [];

	this.resolution=25;
	this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture(textura)});

	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = 0;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	this.mesh.name = "Sun";


	this.animar2=function(stepS,stepsun){
		this.mesh.rotation.y=stepS;
		this.transformacion.rotation.y=stepS;
		for(i=0;i<this.satelites.length;i++){
			this.satelites[i].animar(stepsun);
			}
		};

	this.draw=function(scene){
		scene.add(this.mesh);
	};

	this.addPlaneta=function(planeta){
		this.planetas.push(planeta);
		planeta.draw(this.mesh);

	};
};
