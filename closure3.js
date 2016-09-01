var links = document.getElementsByTagName('A');

for (var i = 0; i < links.length; i++) {
	links[i].num = i;
   links[i].onclick = function(e) {
      console.log(e.currentTarget.num);
   }
}
