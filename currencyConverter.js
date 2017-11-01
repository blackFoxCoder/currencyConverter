function calculate()
	{
		u=document.getElementById('rate').value;
		v=document.getElementById('amt').value;
		z=u*v;
		document.getElementById('result').innerHTML= '=N=' +z;
		//document.getElementById('notice').innerHTML = 'Your conversion Result is' + ' '
	}