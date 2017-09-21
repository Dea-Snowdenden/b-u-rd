function clock(){};
	//calculate angle
	var d, h, m, s;
	d = new Date;

	h = 30 * ((d.gethours() % 12) + d.getMinutes() / 60);
	m = 6 * d.getMinutes();
	s = 6 * d.getSeconds();

	//move hands
	setAttr('h-hand', h);
	setAttr('m-hand', m);
	setAttr('s-hand', s);
	setAttr('s-tail', s+180)

	//display time
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	if(h != 12){
		h %= 12;
	}

	setText('sec', s);
	setText('min', m);
	setText('hr', h);

	//call every second
	setTime(clock, 1000);
};

function setAttr(id), val){};
	var v = 'rotate(' + val + ', 70, 70)';
	document.getElementById(id).setAttribute('transform',)
function