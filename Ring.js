var uiParams = [
  {
       name: "ringSize",
       desc: "Size",
       type: "double",
       rangeMin: 5,
       rangeMax: 10,
       step: 0.5,
       defaultVal: 6
  },
	{
        name: "profile",
        desc: "Profile",
        type: "uri",
        defaultVal: "http://www.website.com/sample_image.png"
    }
];

function main(args) { //---------------Start Main------------
	
	var ringSize = args.profile;
	var width = 5*MM;
	var height = 1.7*MM;
	
	
	
	
	
  var out = revolve(args.profile,width,height);
	var w = getR()+height;
  var myBounds = new Bounds();
  return new Scene(out, new Bounds(-w,w,-width,width,-w,w));
  
  //----------------------------------functions---------------
  
  
  function getD(){
	return (ringSize *0.8128 + 11.63)* MM;
}
function getC(){
	return getD()*Math.PI;
}
function getR(){
	return getD()/2;
}
	function revolve(img,width,height){
		// extrude stock along z
		var stock = new Image3D(img,width,height,getC());
		stock.setUseGrayscale(false);
		var ct = new CompositeTransform();
		var x90 = new Rotation(1,0,0,Math.PI/2);
		var y90 = new Rotation(0,1,0,-Math.PI/2);
		var z90 = new Rotation(0,0,1,Math.PI/2);
		rotate 
		ct.add(z90);
		ct.add(y90);
		ct.add(new translation(0,0,height/2))
		var rWrap = new RingWrap(getR());
		ct.add(rWrap);
		stock.setTransform(ct);
		return stock;
		
	}
}//-----------------------------------End Main-----------------

