var uiParams = [
  {
       name: "scale",
       desc: "scale",
       type: "double",
       rangeMin: 1,
       rangeMax: 5,
       step: 0.5,
       defaultVal: 1
  }
	
];

function main(args) { //---------------Start Main------------
	
	//var scl = args.scale;
	//var blWidth = 6*MM;
    var wScale = 3;
	var blTh = 2.51*MM;
	var blL = 80*MM;
    var tipScale = 8;
    var tipL = (blTh * tipScale)/2;
	
	
	
	var v1 = new Vector3d(0,0,0);
	var v2 = new Vector3d(0,0,blL);
	var blStock = new Cylinder(v1,v2,blTh/2);
	
	var scl = new Scale(wScale,1,1);
	blStock.setTransform(scl);
	var blTip = new Sphere(blTh/2);
	scl2 = new Scale(wScale,1,tipScale);
	blTip.setTransform(scl2);
	
	var blade = new Union();
	blade.add(blStock);
	blade.add(blTip);
	blade.setTransform(new Translation(0,0,tipL));
      
    var blade2 = draft(blade,0.6);  
    blade2.setTransform(new Rotation(0,0,1,Math.PI/2));
    blade2 = draft(blade2,0.5);
    blade2.setTransform(new Rotation(0,0,1,-Math.PI/2));
	//var spr = new Sphere(5*MM);
  
	var out = blade2;
	
	
  
	var w = 1*MM;
  var myBounds = new Bounds(-w,w,-w,w,-w,w);
	var bounds = new Bounds(-15*MM,15*MM,-blTh*2,blTh*2,-0,blL+(tipL));
  return new Scene(out, bounds);
  
  //----------------------------------functions---------------
  
  

}//-----------------------------------End Main-----------------

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
    out2 = new DataTransformer(out);
	return out2;
}