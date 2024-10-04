let totalMonthlyCost = 0;

function submitForm(event) {
  event.preventDefault();

  let fname = document.querySelector('#fnameInput').value;
  let lname = document.querySelector('#lnameInput').value;
  let idNumber = document.querySelector('#idInput').value;
  let title = document.querySelector('#titleInput').value;
  let annualSalary = parseFloat(document.querySelector('#salaryInput').value); // Convert to number

  const monthlySalary = annualSalary / 12;
  totalMonthlyCost += monthlySalary;

  const newTableRow = document.createElement('tr');
  newTableRow.innerHTML = `
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${idNumber}</td>
    <td>${title}</td>
    <td>$${annualSalary.toFixed(2)}</td>
    <td><button class="delete-btn" onclick="deleteTableRow(this)">Delete</button></td>
  `;

  let tableBody = document.getElementById('employee-rows');
  tableBody.appendChild(newTableRow);

  updateTotalMonthlyCost();

  checkOverBudget();

  document.getElementById('employee-form').reset();

}

function deleteTableRow(button) {
  let row = button.closest('tr');
  let salaryString = row.querySelector('td:nth-child(5)').textContent;
  let annualSalary = parseFloat(salaryString.slice(1));
  let monthlySalary = annualSalary / 12;

  // Update total monthly cost
  totalMonthlyCost -= monthlySalary;
  updateTotalMonthlyCost();

  // Remove the row from the table
  row.remove();

  // Check if still over budget and update CSS class
  checkOverBudget();
}

function updateTotalMonthlyCost() {
  const totalMonthlyCostElement = document.getElementById('total-monthly-cost');
  totalMonthlyCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;
}

function checkOverBudget() {
  const footer = document.getElementById('footer');
  if (totalMonthlyCost > 20000) {
    footer.classList.add('over-budget');
  } else {
    footer.classList.remove('over-budget');
  }
}