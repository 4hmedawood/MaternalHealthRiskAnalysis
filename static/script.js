document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        age: parseFloat(document.getElementById('age').value),
        systolicBP: parseFloat(document.getElementById('systolicBP').value),
        diastolicBP: parseFloat(document.getElementById('diastolicBP').value),
        bs: parseFloat(document.getElementById('bs').value),
        bodyTemperature: parseFloat(document.getElementById('bodyTemperature').value),
        heartRate: parseFloat(document.getElementById('heartRate').value)
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').innerText = `Predicted Risk Level: ${result.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error in prediction.';
    });
});