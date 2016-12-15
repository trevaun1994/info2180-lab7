/*function search(){              
	var name = $("#country").val();
	$.get("world.php", {name:name}, function(response){document.getElementById("result").innerHTML = response;});
};
	
	
$(document).ready( function() {
    $("#lookup").on("click", search);
});  */

$(document).ready( function() {
    $("#lookup").on("click", beginSearch);
    //document.getElementById("lookup").on("click", beginSearch);
});

function searchCountry(search, all) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200)
            document.getElementById("result").innerHTML = xhttp.responseText;
    }
    
    xhttp.open("GET", "world.php?country=" + search + "&all=" + all, true);
    xhttp.send();
}

function beginSearch() {
    var search = document.getElementById("country").value;
    var all = document.getElementById("showall").checked;
    if (all)
        searchCountry(search, 1);
    else
        searchCountry(search, 0);
}
