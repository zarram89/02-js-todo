const buttonSubmit = document.querySelector('.submit');

function getGenderByName(firstName) {
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`
  fetch(url)
    .then(response => {
      if (response.status === 404) {
        throw new Error('Запись не найдена');
      }
      return response.json();
    })
    .then(data => alert(`${firstName} is ${data.gender}`))
}

buttonSubmit.addEventListener('click', function() {
  const inputFieldValue = document.querySelector('.name').value;
  getGenderByName(inputFieldValue);
});

/* Пример запроса
function getRecord(id) {
  return fetch(`https://jsonplaceholder.typicode.com/toos/${id}`)
    .then(response => {
      if (response.status === 404) {
        throw new Error('Запись не найдена');
      }
      return response.json();
    });
}

getRecord(2)
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/


/* Как бы решила нейронка
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gender Predictor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
        }
        .input-group {
            display: flex;
            margin-bottom: 20px;
        }
        input {
            padding: 10px;
            flex-grow: 1;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Gender Predictor</h1>
    <div class="input-group">
        <input type="text" id="nameInput" placeholder="Enter a name">
        <button id="submitBtn">Predict</button>
    </div>

    <script>
        document.getElementById('submitBtn').addEventListener('click', function() {
            const name = document.getElementById('nameInput').value.trim();
            
            if (!name) {
                alert('Please enter a name');
                return;
            }

            predictGender(name);
        });

        function predictGender(firstName) {
            const serverUrl = 'https://api.genderize.io';
            const url = `${serverUrl}?name=${encodeURIComponent(firstName)}`;
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.gender) {
                        alert(`${data.name} is ${data.gender}`);
                    } else {
                        alert(`Could not determine gender for ${data.name}`);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to predict gender. Please try again.');
                });
        }
    </script>
</body>
</html>
*/