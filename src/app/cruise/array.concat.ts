/**
 * Created by juliapassynkova on 2015-12-20.
 */

var arr = [1,2,3];

var val = arr.reduceRight((acc, val, index) => {
  if(index == 0) {
    return (acc + val)/arr.length;
  }
  else {
    return acc + val;
  }
}, 0);

console.log(val);

var names = "julia vadim anna steven";

var newnames = names.split(" ")
.map(x=> x.charAt(0).toUpperCase() + x.slice(1))
.join(" ");

console.log(newnames);

var lessons = [
  {
    name: "Salsa",
    view: 1000
  },
  {
    name: "Chacha",
    view: 3000
  },
  {
    name: "Vals",
    view: 50
  }
];

var list = lessons.sort((x,y)=>(-x.view+y.view)).map(x=>
`<li>${x.name}: ${x.view}</li>`
).join('\n');

var ul = `<ul>\n${list}\n</ul>`;

console.log(ul);



