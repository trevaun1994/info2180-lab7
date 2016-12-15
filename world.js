document.getElementById("lookup").addEventListener("click", function(){
    search();
});

function search(){              
	var name = $("#country").val();
	$.get("world.php", {name:name}, function(response){
	    
	    document.getElementById("result").innerHTML = response;
	});
    
} 
