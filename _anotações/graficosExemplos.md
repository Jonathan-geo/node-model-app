function grafico2(arrayTotalEstado){

    var data = [];
    var obitosAcumulados = [];
    var casosAcumulados = [];

    for (var i = 0; i<arrayTotalEstado.length; i++){
        data.push(arrayTotalEstado[i].data); //estado
        obitosAcumulados.push(arrayTotalEstado[i]['obitosAcumulados\r']); //obitosAcumulados
        casosAcumulados.push(arrayTotalEstado[i].casosAcumulados); //casosAcumulados
    }

    // console.log(estado);
    // console.log(obitosAcumulados);
    // console.log(casosAcumulados);

    var ctx = document.getElementById('grafico2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data: {
            labels: data,  ///////////////data
            datasets: [{ 
                data: casosAcumulados,
                label: "Casos notificados",
                borderColor: "#3e95cd",
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false
                }, { 
                data: obitosAcumulados,
                label: "Mortes por covid",
                borderColor: "#8e5ea2",
                backgroundColor: 'rgb(0, 139, 139)',
                fill: false
            }]
        },
    
        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'CASOS E ÓBTOS POR ESTADO'
            }, 
            scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: 21000,
                    stepSize: 3000
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Escala Titulo"
                  }
                }]
            }
        }
    });
}





updateConfigByMutating(chart);

function updateConfigByMutating(chart) {
    chart.options.title.text = 'CASOS E ÓBTOS POR ESTADO - BRASIL';
    chart.update();
}




----------------------------------PROBLEMA COM RECARREGAR GRÀFICO---------------------------------------
SOLUÇÔES

var resetCanvas = function(){
  $('#results-graph').remove(); // this is my <canvas> element
  $('#graph-container').append('<canvas id="results-graph"><canvas>');
  canvas = document.querySelector('#results-graph');
  ctx = canvas.getContext('2d');
  ctx.canvas.width = $('#graph').width(); // resize to parent width
  ctx.canvas.height = $('#graph').height(); // resize to parent height
  var x = canvas.width/2;
  var y = canvas.height/2;
  ctx.font = '10pt Verdana';
  ctx.textAlign = 'center';
  ctx.fillText('This text is centered on the canvas', x, y);
};



var myPieChart=null;

function drawChart(objChart,data){
    if(myPieChart!=null){
        myPieChart.destroy();
    }
    // Get the context of the canvas element we want to select
    var ctx = objChart.getContext("2d");
    myPieChart = new Chart(ctx).Pie(data, {animateScale: true});
}





document.getElementById("chartContainer").innerHTML = '&nbsp;';
document.getElementById("chartContainer").innerHTML = '<canvas id="myCanvas"></canvas>';
var ctx = document.getElementById("myCanvas").getContext("2d");






Eu tive o mesmo problema aqui ... Eu tentei usar o método destroy () e clear (), mas sem sucesso.

Eu resolvi da seguinte maneira:

HTML:

<div id="pieChartContent">
    <canvas id="pieChart" width="300" height="300"></canvas>
</div>
Javascript:

var pieChartContent = document.getElementById('pieChartContent');
pieChartContent.innerHTML = '&nbsp;';
$('#pieChartContent').append('<canvas id="pieChart" width="300" height="300"><canvas>');

ctx = $("#pieChart").get(0).getContext("2d");        
var myPieChart = new Chart(ctx).Pie(data, options);
Funciona perfeito para mim ... Espero que ajude.
