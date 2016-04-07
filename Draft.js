function main(args) { //---------------Start Main------------
	
	var spr = new Sphere(5*MM);
	var cb = new Box (0,0,5*MM,2*MM,2*MM,10*MM);
  
  
  
    var cb2 = draft(cb,20); 
  
  
	var s = 20*MM;
	var bounds = new Bounds(-s,s,-s,s,-s,s);
  return new Scene(cb2, bounds);
  

}//-----------------------------------End Main---------------

//Draft model given degrees in Z direction parting line xy plane.
function draft(model,angleDeg){
	
    var r = 360/((2*Math.PI)*Math.abs(angleDeg))*MM;  
  
	
	
	//var rotate = new Rotation(0,1,0,Math.PI/2,model.getCenter());
	var trans = new Rotation(0,1,0,Math.PI);
	
	var rWrap = new RingWrap(r);
	var out = new DataTransformer(model);
    var ct = new CompositeTransform();
  if(angleDeg <= 0){
    ct.add(trans);
  }
    ct.add(rWrap);
    ct.add(new Translation(0,0,-r));
  if(angleDeg <= 0){
    ct.add(trans);
  }
    
    out.setTransform(ct);
	return out;
}
 //----------------------------------functions---------------
