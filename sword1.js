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
	var blWidth = 8*MM;
	var blTh = 2.51*MM;
	var blL = 60*MM;
	
	
	
	var v1 = new Vector3d(0,0,0);
	var v2 = new Vector3d(0,0,3*MM);
	var blStock = new Cylinder(v1,v2,blTh/2);
	
	var scl = new Scale(4,1,1);
	blStock.setTransform(scl);
	var blTip = new Sphere(blTh/2);
	scl2 = new Scale(4,1,8);
	blTip.setTransform(scl2);
	
	var blade = new Union();
	blade.add(blStock);
	blade.add(blTip);
	
	//var out = new Sphere(5);
	var out = blade;
	
	
  
	var w = 5*MM;
  var myBounds = new Bounds(-w,w,-w,w,-w,w);
	var bounds = new Bounds(-10*MM,10*MM,-blTh,blTh,-w,w);
  return new Scene(out, bounds);
  
  //----------------------------------functions---------------
  
  

}//-----------------------------------End Main-----------------

