document.addEventListener('DOMContentLoaded', () => {
    const flightForm = document.getElementById('flight-form');
    flightForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const cabin = document.getElementById('cabin').value;

        // Simulate fetching results (provided JSON data)
        const results = [
            {
                airline: 'KLM',
                route: `${origin} -> ${destination}`,
                dates: '2024-07-29 - 2024-10-07',
                businessMiles: 'N/A',
                min_businMiles : '',
                economyMiles: '53500 ',
                min_ecoMiles:'+ $189',
                firstMiles: 'N/A',
                logo_url: 'https://via.placeholder.com/100?text=KLM'
            },
            {
                airline: 'Qantas',
                route: `${origin} -> ${destination}`,
                dates: '2024-07-09 - 2024-10-07',
                businessMiles: '144600 ',
                min_businMiles:'+ $177',
                economyMiles: '55200 ',
                min_ecoMiles:'+ $158',
                firstMiles: 'N/A',
                logo_url: 'https://via.placeholder.com/100?text=Qantas'
            }
        ];

        // Call displayResults with the simulated data to show the results
        displayResults(results);
    });
});

function displayResults(results) {
    const resultsSection = document.querySelector('.results-section');
    resultsSection.innerHTML = '';

    results.forEach(result => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <img src="${result.logo_url}" alt="${result.airline} logo">
            <h3><span>${result.airline}</span></h3>
            <p>${result.route}<br>${result.dates}</p>
            <p><span>${result.businessMiles}</span>${result.min_businMiles}<br>Min Business Miles</p>
            <p><span>${result.economyMiles}</span>${result.min_ecoMiles}<br>Min Economy Miles</p>
            <p><span>${result.firstMiles}</span><br>Min First Miles</p>
        `;

        resultsSection.appendChild(card);
    });
}
