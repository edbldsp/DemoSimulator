var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [{
        'next .js-chart1': 'Gráfico de barras',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .js-chart2': 'Gráfico de Pizza',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .js-chart3': 'Gráfico de linha',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .js-chart4': 'Gráfico de radar',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .js-chart5': 'Gráfico de bolhas',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .js-chart6': 'Gráfico Polar',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    //Table
    {
        'next .firstname': 'Firstname',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .lastname': 'Lastname',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },
    {
        'next .email': 'Email',
        'skipButton': {
            className: "mySkip",
            text: "Fechar"
        },
        'nextButton': {
            className: "myNext",
            text: "Próximo"
        },
    },

];

enjoyhint_instance.set(enjoyhint_script_steps);

enjoyhint_instance.run();

function startTour() {
    var enjoyhint_instance = new EnjoyHint({});
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
}

$(document).ready(function () {

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var myDoughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)'
                ]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ]
        }
    });

    var ctx3 = document.getElementById("myChart3").getContext('2d');
    var lineChart = new Chart(ctx3, {
            type: 'line',
            data: {
                label: ['Horas'],
                datasets: [{
                    data: [{
                        x: 10,
                        y: 20
                    }, {
                        x: 15,
                        y: 10
                    }],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ]
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0, // disables bezier curves
                    }
                }
            }
    });
    var ctx4 = document.getElementById("myChart4").getContext('2d');
    var radarChart = new Chart(ctx4, {
        type: 'radar',
        data: {
            datasets: [
                {
                    label: ['Yellow'],
                    data: [3, 2, 1],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.5)'
                    ]
                },

                {
                    label: ['Blue'],
                    data: [2, 1, 3],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)'
                    ],
                    fill: "-1"
                },

                {
                    label: ['Red'],
                    data: [1, 3, 2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)'
                    ],
                    fill: "-1"
                }
            ],

            labels: [
                'Population1',
                'Population2',
                'Population3'
            ]
        }
    });

    var ctx5 = document.getElementById("myChart5").getContext('2d');
    var bubbleChart = new Chart(ctx5, {
        type: 'bubble',
        data: {
            labels:"Teste",
            datasets: [
                {
                    label: ['Yellow'],
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',            
                    data: 
                    [{
                        x:5,
                        y:2,
                        r:10
                    },
                    {
                        x:3,
                        y:10,
                        r:6
                    }]
                },
                {
                    label: ['Blue'],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',            
                    data: 
                    [{
                        x:10,
                        y:4,
                        r:5
                    },
                    {
                        x:2,
                        y:8,
                        r:9
                    }]
                },
                {
                    label: ['Red'],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',            
                    data: 
                    [{
                        x:7.5,
                        y:3,
                        r:7.5
                    },
                    {
                        x:2,
                        y:15,
                        r:12
                    }]
                },
            ]
        }
    });

    var ctx6 = document.getElementById("myChart6").getContext('2d');
    var polarChart = new Chart(ctx6, {
        type: 'polarArea',
        data: {
            labels:"Teste",
            datasets: [
                {
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)'
                    ],            
                    data: 
                    [10,20,30]
                }
            ],
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ]
        }
    });
});