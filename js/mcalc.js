function mcalc(year1,year2){
			var name1 = document.getElementById('txtfname').value;
			var name2 = document.getElementById('txtmname').value;
			var name3 = document.getElementById('txtlname').value;
			var bday = document.getElementById('bdate').value; //bday input of user
			//var txtarea = document.getElementById('textarea-a').value;
			var randomnumber = Math.floor(Math.random()*99);
			var divid = document.getElementById('rmarry');
			
			
			var year = ( Math.floor ( Math.random ( )*0.9999999999999999* (2020 - 2013 + 1) + 2013) );
			
			document.getElementById('result1').value = randomnumber;
			document.getElementById('date_result').value = year;
			
		

				window.location = '#'+'rmarry';
				document.getElementById('result1').value = randomnumber; 
				document.getElementById('date_result').value = year;
				
								
}
