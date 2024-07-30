function handleSubmit(event) {
    event.preventDefault();
  
   console.log('submit clicked');
    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let jobID = document.querySelector('#job-id');
    let jobTitle = document.querySelector('#job-title');
    let annualSalary = document.querySelector('#annual-salary');
  
    console.log('Hello', firstName.value, lastName.value, jobID.value, jobTitle.value, annualSalary.value);

  }  

  function deleteTheEmployee(event) {
    console.log('delete clicked');
  
    console.log('this is the element that was clicked:', event.target.innerHTML);
  }