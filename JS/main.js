function test1(){
	
    var fName = prompt("Hey brother?");
	var myColour = prompt("Pick a colour," + fName);

	if(myColour == "red"){
		console.log("ha. this guy likes red");
	}
	else if(myColour == "green"){
        console.log("ah,green. He's alright.");		
	}
	else if(myColour == "yellow"){
        console.log("get him something yellow.");	
    }
    else{ 	
	    console.log("that's not a colour")
	}
}

function test2(){
	 var age=prompt("how old are you?")
	 
	 
	
	if(age < 14){
		alert("That's not too old")
		
	}
	else if(age == 14){
		alert("14 is a good age")
		
	}
	else if(age > 14){
		alert("You're older than I thought")
		
	}
	else{
		alert("Not a valid age")
	}
}