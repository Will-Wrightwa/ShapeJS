function main(args) { //---------------Start Main------------
	
	spr = new Sphere(5*MM);
	
	var s = 10*MM;
	var bounds = new Bounds(-s,s,-s,s,-s,s)
  return new Scene(spr, bounds);
  

}//-----------------------------------End Main---------------
 //----------------------------------functions---------------