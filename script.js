const newBookButton = document.querySelector('.new-book');
const formsContainer = document.querySelector('.forms-container');
// clone the container div
const originalForm = document.querySelector('.form');

const categories = ["Author", "Title", "Number of pages", "Has it been read"];
newBookButton.addEventListener('click', () => {
    const newForm = originalForm.cloneNode(true);
    const newFormAnswers = newForm.querySelector('.answers');

    // delete all children of "newFormAnswers"
    while (newFormAnswers.firstChild) {
        newFormAnswers.removeChild(newFormAnswers.lastChild);
    }

    // create a form element
    let form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.classList.add('absolute');
    
    form.appendChild(newForm);

    // create and add input elements to the new form
    let author = document.createElement('input');
    author.classList.add('author');
    author.setAttribute('type', 'text');
    author.setAttribute('name', 'author');
    author.required = true;
    let title = document.createElement('input');
    title.classList.add('title');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.required = true;
    let pages = document.createElement('input');
    pages.classList.add('pages');
    pages.setAttribute('type', 'number');
    pages.setAttribute('name', 'pages');
    pages.required = true;
    let read = document.createElement('input');
    read.classList.add('read');
    read.setAttribute('type', 'checkbox');
    read.setAttribute('name', 'read');
    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('name', 'submit');
    
    newFormAnswers.append(author);
    newFormAnswers.append(title);
    newFormAnswers.append(pages);
    newFormAnswers.append(read);
    newFormAnswers.append(submit);

    document.getElementsByTagName('body')[0].appendChild(form);

    form.addEventListener("submit", () => {
        event.preventDefault();
        const displayForm = originalForm.cloneNode(true);
        const displayFormAnswers = displayForm.querySelector('.answers');

        formsContainer.appendChild(displayForm);

        displayFormAnswers.querySelector('.author').textContent = author.value;
        displayFormAnswers.querySelector('.title').textContent = title.value;
        displayFormAnswers.querySelector('.pages').textContent = pages.value;
        displayFormAnswers.querySelector('.read').textContent = read.checked ? 'Yes' : 'No';

        form.remove();
    });
});

