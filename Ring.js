var uiParams = [
  {
       name: "size",
       desc: "Size",
       type: "double",
       rangeMin: 5,
       rangeMax: 10,
       step: 0.5,
       defaultVal: 6
  }
];

function main(args) {
  var s = args.size * MM;
  var box = new Box(s,s,s);
  
  return new Scene(box, new Bounds(-s,s,-s,s,-s,s));
}
