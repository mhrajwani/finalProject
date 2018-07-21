$(document).ready(function() {
    var parts = this.URL.split("/");
    var lastId = parts.pop() || parts.pop();
    console.log(lastId + "is the id");

    $.ajax({
        url: '/watchlist2/' + lastId,
    }).done(function(sb){

var data = [];
var label = [];
sb.chart.forEach(function(sb){

    data.push(sb.close);
    label.push(sb.label); 
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: label,
                        datasets: [{
                            label: sb.quote.companyName,
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