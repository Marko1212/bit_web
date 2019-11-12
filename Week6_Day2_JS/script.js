$(function () {
    /*   console.log("Hello, world!");
  
      $("li:first").addClass("stil");
      $("li").addClass("upperCase");
      $("li:last").addClass("active");
      /*   $("li:nth-child(3)").addClass("middle");
    $("li").eq(Math.floor($("li").length / 2)).addClass("middle"); */


    var arr = ["https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif",
        "https://www.stopmandatoryvaccination.com/wp-content/uploads/2015/06/Advertise-300X350.gif"];


    for (var i = 0; i < arr.length; i++) {
        arr[i] = $('<img>').attr("src", arr[i]);
        $("body").append(arr[i]);
    }


    $("body").before("<h1> Gallery Heading</h1>");










});

