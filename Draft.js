function main(args) { //---------------Start Main------------
	
	var spr = new Sphere(5*MM);
	var cb = new Box (0,0,5*MM,2*MM,2*MM,10*MM);
  
  
  
    var cb2 = draft(cb,1); 
  
  
	var s = 20*MM;
	var bounds = new Bounds(-s,s,-s,s,-s,s);
  return new Scene(cb2, bounds);
  

}//-----------------------------------End Main---------------

//Draft model given degrees in Z direction parting line xy plane.
function draft(model,angleDeg){
	
    var r = 360/((2*Math.PI)*angleDeg)*MM;  
  
	var rWrap = new RingWrap(r);
	var out = new DataTransformer(model);
    var ct = new CompositeTransform();
    ct.add(rWrap);
    ct.add(new Translation(0,0,-r));
    
    out.setTransform(ct);
	return out;
}
 //----------------------------------functions---------------
