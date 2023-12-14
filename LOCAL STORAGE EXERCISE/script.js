function storeUserData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const userData = {
      name,
      age
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    document.getElementById('userForm').reset();
  }

  function retrieveUserData() {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const userData = JSON.parse(storedData);

      const displayArea = document.getElementById('displayArea');

      displayArea.innerHTML = '';

      const table = document.createElement('table');
      const headerRow = table.insertRow(0);
      const nameHeader = headerRow.insertCell(0);
      const ageHeader = headerRow.insertCell(1);

      nameHeader.innerHTML = '<b>Name</b>';
      ageHeader.innerHTML = '<b>Age</b>';

      const dataRow = table.insertRow(1);
      const nameCell = dataRow.insertCell(0);
      const ageCell = dataRow.insertCell(1);

      nameCell.innerHTML = userData.name;
      ageCell.innerHTML = userData.age;

      displayArea.appendChild(table);
    } else {
      alert('No user data found in Local Storage.');
    }
  }
