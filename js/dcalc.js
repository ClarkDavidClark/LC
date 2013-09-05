function dcalc(){
			var name1 = document.getElementById('txtnamep1').value;
			var name2 = document.getElementById('txtnamep2').value;
			var randomnumber = Math.floor(Math.random()*99);
			var divid = document.getElementById('rdead');
			document.getElementById('deathresult').value = randomnumber;
			
	{
				window.location = '#'+'rdead';
				document.getElementById('deathresult').value = randomnumber;
				}
}