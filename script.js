// Gráfico de Engajamento - Pie Chart
const engajamentoCtx = document.getElementById('engajamentoChart').getContext('2d');
const engajamentoChart = new Chart(engajamentoCtx, {
    type: 'pie',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Engajamento (em mil)',
            data: [12, 19, 10, 5],
            backgroundColor: [
                'rgba(0, 188, 212, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(33, 150, 243, 0.6)',
                'rgba(156, 39, 176, 0.6)'
            ],
            borderColor: [
                'rgba(0, 188, 212, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(33, 150, 243, 1)',
                'rgba(156, 39, 176, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Gráfico de Alcance - Radar Chart
const alcanceCtx = document.getElementById('alcanceChart').getContext('2d');
const alcanceChart = new Chart(alcanceCtx, {
    type: 'radar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Alcance (em mil)',
            data: [15, 25, 30, 20, 40, 50],
            backgroundColor: 'rgba(255, 152, 0, 0.2)',
            borderColor: 'rgba(0, 188, 212, 1)',
            pointBackgroundColor: 'rgba(0, 188, 212, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});
