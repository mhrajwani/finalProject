
$(document).ready(function() {
var parts = this.URL.split("/");
var lastId = parts.pop() || parts.pop();
console.log(lastId + "is the id");


$.ajax({
    url: '/portfolio2/' + lastId,
}).done(function(fp){
console.log(fp.cash);




var cash = fp.cash;
var stocks = fp.stocks;
var debts = fp.debts;
debts = debts * -1;
var other_assets = fp.other_assets;
var other_liabilities = fp.other_liabilities;
other_liabilities = other_liabilities * -1;
var total = cash+stocks+debts+other_assets+other_liabilities;

var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ["cash", "stock", "debts", "other assets", "other liabilities", "Net Assets"],
                        datasets: [{
                            label: 'MY Portfolio',
                            data: [cash,stocks,debts,other_assets,other_liabilities,total],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
            });
})
