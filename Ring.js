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

function main(args) { //-------------------------Start Main
	
	var ringSize = 5;
	var width = 5*MM;
	var height = 1.7*MM;
	
	var s = 10* MM;
	
	var stock = new Image3D(args.profile,width,height,getC());
	stock.setUseGrayscale(false);
	
	
  var out = stock;
  
  return new Scene(out, new Bounds(-s,s,-s,s,-s,s));
  
  
  
  
  function getD(){
	return (ringSize *0.8128 + 11.63)* MM;
}
function getC(){
	return getD()*Math.PI;
}
function getR(){
	return getD()/2;
}
}//------------------------------End Main---------------------------

