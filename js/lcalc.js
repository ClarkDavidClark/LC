function lcalc(){
			var name1 = document.getElementById('txtnamep1').value;
			var name2 = document.getElementById('txtnamep2').value;
			var randomnumber = Math.floor(Math.random()*99);
			var divid = document.getElementById('rlove');
			document.getElementById('txtresult').value = randomnumber;
			
			if (name1=="") {
				alert("Please fill in name of person 1");
				}
			else if (name2==""){
				alert("Please fill in name of person 2");
				}
			else {
				window.location = '#'+'rlove';
				document.getElementById('textresult').value = randomnumber;
				}
}

