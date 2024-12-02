class VotingApp {
    constructor(ctx, data) {
        this.ctx = ctx;
        this.votes = {};
        this.options = data.map(item => item.option);
        this.colors = data.map(item => item.color);

        this.initializeForm();
        this.updateChart();
    }

    initializeForm() {
        document.getElementById('voteForm').addEventListener('submit', (event) => {
            this.handleVote(event);
        });

        const voteOption = document.getElementById('voteOption');
        this.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            voteOption.appendChild(optionElement);
        });
    }

    handleVote(event) {
        event.preventDefault();
        const voteInput = document.getElementById('voteOption');
        const selectedOption = voteInput.value;

        if (selectedOption) {
            this.votes[selectedOption] = (this.votes[selectedOption] || 0) + 1;
            this.updateChart();
            voteInput.value = ''; 
        }
    }

    updateChart() {
        const labels = this.options;
        const data = labels.map(option => this.votes[option] || 0);

        if (this.chart) {
            this.chart.destroy(); 
        }

        this.chart = new Chart(this.ctx, {
            type: 'polarArea',  // Switched to 'polarArea'
            data: {
                labels: labels,
                datasets: [{
                    label: 'Votes',
                    data: data,
                    backgroundColor: this.colors,  
                }]
            },
            options: {
                responsive: true,
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    fetch('voting.json')
        .then(response => response.json())
        .then(data => {
            const app = new VotingApp(ctx, data);
        })
        .catch(error => {
            console.error('Error fetching options:', error);
        });
});
