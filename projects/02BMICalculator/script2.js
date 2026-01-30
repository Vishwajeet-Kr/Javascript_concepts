const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid input ${height}`;
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid input ${weight}`;
        return;
    }

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is : ${BMI}`;

})