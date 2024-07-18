const newBookButton = document.querySelector('.new-book');
const formsContainer = document.querySelector('.forms-container');
// clone the container div
const originalForm = document.querySelector('.form');

newBookButton.addEventListener('click', () => {
    // don't allow forms to stack, delete all of them
    document.querySelectorAll('.absolute').forEach(el => el.remove());

    const newForm = originalForm.cloneNode(true);
    const newFormAnswers = newForm.getElementsByClassName('answer');

    for (let i = newFormAnswers.length - 1; i >= 0; i--) {
        let newElement = document.createElement('input');

        // add attributes based on the class of the original element
        switch (newFormAnswers.item(i).classList[0]) {
            case 'author':
                newElement.classList.add('author', 'answer');
                newElement.setAttribute('type', 'text');
                newElement.setAttribute('name', 'author');
                newElement.required = true;
                break;
            case 'title':
                newElement.classList.add('title', 'answer');
                newElement.setAttribute('type', 'text');
                newElement.setAttribute('name', 'title');
                newElement.required = true;
                break;
            case 'pages':
                newElement.classList.add('pages', 'answer');
                newElement.setAttribute('type', 'number');
                newElement.setAttribute('name', 'pages');
                newElement.setAttribute('min', '0');
                newElement.required = true;
                break;
            case 'read':
                newElement.classList.add('read', 'answer');
                newElement.setAttribute('type', 'checkbox');
                newElement.setAttribute('name', 'read');
                break;
            default:
                break;
        }

        newForm.replaceChild(newElement, newFormAnswers.item(i));
    }

    // create a form element
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.classList.add('absolute');
    form.appendChild(newForm);

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('name', 'submit');
    newForm.append(submit);

    document.getElementsByTagName('body')[0].appendChild(form);

    // when submiting - add the values to a card and close the form
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const displayForm = originalForm.cloneNode(true);

        displayForm.querySelector('.answer.author').textContent = newForm.querySelector('.author.answer').value;
        displayForm.querySelector('.answer.title').textContent = newForm.querySelector('.title.answer').value;
        displayForm.querySelector('.answer.pages').textContent = newForm.querySelector('.pages.answer').value;
        displayForm.querySelector('.answer.read').checked = newForm.querySelector('.read.answer').checked ? 'Yes' : 'No';

        formsContainer.appendChild(displayForm);
        form.remove();
    });
});