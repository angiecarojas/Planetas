function Satelite(radius,textura,distancia){
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
	this.mesh.name = "Satelite";

	//objeto intermedio para realizar transformaciones
	this.transformacion=new THREE.Object3D();

	//añadimos el planeta a la transformacion
	this.transformacion.add(this.mesh);

	this.animar=function(stepluna){
		 this.transformacion.rotation.y=stepluna;
	};

	this.draw=function(scene){
		scene.add(this.transformacion);
	};

};
