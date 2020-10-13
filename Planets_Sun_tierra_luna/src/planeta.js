function Planeta(radius,textura,distancia){

	//conjuto de satelites
	this.satelites = [];

	this.resolution=25;
	this.geometry=new THREE.SphereGeometry(radius,this.resolution,this.resolution);
	this.material=new THREE.MeshLambertMaterial({
		map: THREE.ImageUtils.loadTexture(textura) });
	this.mesh= new THREE.Mesh(this.geometry,this.material);
	this.mesh.position.x = distancia;
	this.mesh.position.y = 0;
	this.mesh.position.z = 0;
	//this.mesh.castShadow=true;
	//this.mesh.receiveShadow = true;
	this.mesh.name = "Planeta";

	//objeto intermedio para realizar transformaciones
	this.transformacion=new THREE.Object3D();

	//añadimos el planeta a la transformacion
	this.transformacion.add(this.mesh);

	this.animar=function(step,stepluna){
		this.mesh.rotation.y=step;
		this.transformacion.rotation.y=step;
		for(i=0;i<this.satelites.length;i++){
		this.satelites[i].animar(stepluna);
		}
	};

	this.draw=function(scene){
		scene.add(this.transformacion);
	};

	this.addSatelite=function(satelite){
		this.satelites.push(satelite);
		satelite.draw(this.mesh);
	};



};
