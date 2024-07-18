const newBookButton = document.querySelector('.new-book');
const formsContainer = document.querySelector('.forms-container');

newBookButton.addEventListener('click', () => {
    // Clone the container div
    const originalForm = document.querySelector('.form');
    const newForm = originalForm.cloneNode(true);

    // Reset the values in the cloned form
    const answers = newForm.querySelectorAll('.answers p');
    answers.forEach(answer => answer.textContent = '...');

    // Append the cloned form to the forms container
    formsContainer.appendChild(newForm);
});