$(document).ready(function() {
    var parts = this.URL.split("/");
    var lastId = parts.pop() || parts.pop();
    console.log(lastId + "is the id");

    var symbol = document.getElementById("sym").innerHTML
    
    var url2 = "https://api.iextrading.com/1.0/stock/"+ symbol + "/chart/"
    var time;


$(".chart").click(function(){
 time = $(this).attr("value")
 var duration = $(this).attr("duration")
 
var url3 = url2+time
console.log(url3);
    $.ajax({
        url: url3,
    }).done(function(sb){

var data = [];
var label = [];
sb.forEach(function(sb){

    data.push(sb.close);
    label.push(sb.label); 
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: label,
                        datasets: [{
                            label: duration,
                            data: data,
                            borderWidth: 1,
                            pointRadius: 0
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:false
                                }
                            }]
                        }
                    }
                });
            })
})

    var duration = "1 MONTH"
    $.ajax({
        url: url2,
    }).done(function(sb){

var data = [];
var label = [];
sb.forEach(function(sb){

    data.push(sb.close);
    label.push(sb.label); 
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: label,
                        datasets: [{
                            label: duration,
                            data: data,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:false
                                }
                            }]
                        }
                    }
                });
            })
        })