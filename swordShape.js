function main(args) { //---------------Start Main------------
	
	var spr = new Sphere(5*MM);
	var cb = new Box (0,0,5*MM,2*MM,2*MM,10*MM);
    var cb2 = draft(cb,20); 
	
	
	
	
	var sword = swordShape(80*MM,8*MM,2.51*MM,14*MM,0.5,0.1);
  
  
	var s = 20*MM;
	var bounds = new Bounds(-s,s,-s,s,-s,s);
  var bounds2 = new Bounds(-10*MM,10*MM,-20.51*MM,20.51*MM,-0,80*MM);
  return new Scene(sword, bounds2);
  

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
function swordShape(OverallLength,width,thickness,tipLength,profileTaperAngle,distalTaperAngle){
	
	var stockLength = OverallLength-tipLength;
	var widthScale = width/thickness;
	var tipScale = tipLength/thickness;
	var v0 = new Vector3d(0,0,0);
	var v1 = new Vector3d(0,0,stockLength);
	var stock = new Cylinder(v0,v1,thickness/2);
	stock.setTransform(new Scale(widthScale,1,1));
	var tip = new Sphere(thickness/2);
	tip.setTransform(new Scale(widthScale,1,tipScale));
	var sword = new Union(stock,tip);
	sword.setTransform(new Translation(0,0,tipLength));
    //sword = new DataTransformer(sword);
	sword = draft(sword, profileTaperAngle);
    sword = new DataTransformer(sword);
	sword.setTransform(new Rotation(0,0,1,Math.PI/2));
	sword = draft(sword, distalTaperAngle);
    sword = new DataTransformer(sword);
	sword.setTransform(new Rotation(0,0,1,-Math.PI/2));
	sword = new DataTransformer(sword);
	
	return sword;
							
}