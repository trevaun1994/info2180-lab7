window.onload=function(){
	document.getElementById("lookup").onclick= search();
}

function search(){              
	var username = $("#lookup").val();
	$.get("world.php", {username:username, password:password}, function(response){
	    
	    document.getElementById("result").innerHTML(response);
	});
    
} 