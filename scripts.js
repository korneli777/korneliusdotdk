

var duch = "\
%%%%%%%%5P5YJ?!Y:<br>\
%%%%%7B?~GBBBPYY55?~:                                                                                         <br>\
%%%%%5BB:?BG~^^^:YBBGY7:                                                                                      <br>\
%%%%%5BB5PBG:^^^^?BBBBBG7       @@@  @@@  @@@@@@  @@@@@@@  @@@  @@@ @@@@@@@@ @@@      @@@ @@@  @@@  @@@@@@    <br>\
%%%%%?BBBBBBGYJJ5BBBBBB5:       @@!  !@@ @@!  @@@ @@!  @@@ @@!@!@@@ @@!      @@!      @@! @@!  @@@ !@@        <br>\
%%%%%%GBBBBBBBBBBBBBB5!         @!@@!@!  @!@  !@! @!@!!@!  @!@@!!@! @!!!:!   @!!      !!@ @!@  !@!  !@@!!     <br>\
%%%%%%?BBBBBBBBBBBPJ~%%.:~!???  !!: :!!  !!:  !!! !!: :!!  !!:  !!! !!:      !!:      !!: !!:  !!!     !:!    <br>\
%%%%%%%YBBBBBBBPJ55:%77Y5Y?!!   .:   :::  :.:..:  .:   :.: ::    :. :.::.::  :.::.:.: :.:  :.::.:  ::.:.:     <br>\
%%%%%%%%JGGPY?~:%%YG5Y?~:%%.::!!:                                                                             <br>\
%%%%%%%%%%%%%%%%!YY!?YY%.~?YYJ?~                                                                              <br>\
%%%%%%%%%%%%%%~55!%%%5555J!!.%.!!~                  KORNELIus.dk - MATH, ECON, COMPSCI                        <br>\
%%%%%%%%%%%%%75!%%%%!55?Y!%:!JYY?~                                                                            <br>\
%%%%%%%%%%%%%:%%%%~55!%%:5P5?~:%%.:                 pisces and student at UCPH, © 2024                        <br>\
%%%%%%%%%%%%%%%%%~J~%%:?Y?!Y!.!7JYY!                                                                          <br>\
%%%%%%%%%%%%%%%%%%%%%75?:%%!GPY?!?                                                                            <br>\
%%%%%%%%%%%%%%%%%%%%%!:%%7YY!57                                                                               <br>\
%%%%%%%%%%%%%%%%%%%%%%%~Y?Y%%:5J7!~~:                                                                         <br>\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%:PBBBBBGPJ                                                                       <br>\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%~BBBP5Y5557                                                                      <br>\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%?BBY:                                           email: sigurdkornelius@live.dk   <br>\
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%!P?";


function textMatrix(container) {
	var str = duch;
	var ret = "";
	var tab = new Array(str.length);
	var spanS = "<span style=\"color:#2C2C2C\">";
	var spanSb = "<span style=\"color:#0F6700\">";
	var spanE = "</span>";
  
	for (var i = 0; i< str.length; i++) {
		if (str.charAt(i) == " " || str.charAt(i) == "^") tab[i] = randomLetter(1);
		else tab[i] = str.charAt(i);
	}
  
	var count = 0;
	var rets = "";
	var last = new Array(str.length);
	
  var interval = setInterval(function() {
	  var rand = Math.floor(Math.random() * 100) + 70;
	  var lote = new Array(rand);
	
    for (var i=0; i < rand; i++) {
		  lote[i] = Math.floor(Math.random() * str.length);
		  if (str.charAt(lote[i]) == " " || str.charAt(lote[i]) == "^") tab[lote[i]] = randomLetter(1);
  	  else {
			  i--;
			  continue;
		  }
	  }
    
	  ret = "";						
	  for (var i = 0; i < str.length; i++) {
		  if (str.charAt(i) == " " || str.charAt(i) == "^") { 
			  var change = false;
			  for (var j = 0; j < rand; j++) {
				  if (lote[j] == i) {
					  if (str.charAt(i) == "^") ret += "<span style=\"color:#ff7f32\">" + tab[i] + spanE;
					  else {
						  if ((Math.floor(Math.random() * 100) + 0) > 50) {
                ret += "<span style=\"background:#090909;color:#2C2C2C;\">" + tab[i] + spanE;
              }
						  else ret += spanS + tab[i] + spanE;
					  }
					  change = true;
					  break;
				  }
			  }
			  if (!change) ret += spanS + tab[i] + spanE;
		  } else if (str.charAt(i) == "%") ret += "&nbsp";
	    else ret += str.charAt(i);
    }
			
    document.getElementById(container).innerHTML = ret;
  }, 100); 
}
				
function randomLetter(length) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
	return text;
}
	
