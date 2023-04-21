function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       document.getElementById("main-table").innerHTML = '<object type="text/html" data="comingsoon.html" id="objeto"></object>';
    }
    xhttp.open("GET", "comingsoon.html");
    xhttp.send();
 }

$(document).ready(function() {
    $("#pools-hat").click(function(){
        $("#pools-hat-text").toggle()
    });

    $("#milk-shirt").click(function(){
        $("#milk-text").toggle()
    });

    $("#fish-hat").click(function(){
        $("#fish-hat-text").toggle()
    });

    $("#eat-kids").click(function(){
        $("#eat-kids-text").toggle()
    });

    $("#anger").click(function(){
        $("#anger-text").toggle()
    });

    $("#ate").click(function(){
        $("#ate-text").toggle()
    });

    $("#born").click(function(){
        $("#born-text").toggle()
    });

    $("#wolf").click(function(){
        $("#wolf-text").toggle()
    });

    $("#fear").click(function(){
        $("#fear-text").toggle()
    });

    $("#saul").click(function(){
        $("#saul-text").toggle()
    });

    $("#qr").click(function(){
        $("#qr-text").toggle()
    });

    $("#jerma").click(function(){
        $("#jerma-text").toggle()
    });

    $("#ajaxBtn").click(function(){
        $("#main-div").load("comingsoon.html");
    }); 
});