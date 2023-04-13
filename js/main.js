// Add a 'Show more' to description elements with more than 2 lines of text
// When clicked, the button toggles the text to full height

function addShowMoreButton(elementsList) {
    for (let i = 0; i < elementsList.length; i++) {
        const element = elementsList[i].querySelector('.description');
        if (element.offsetHeight > 48) {
            const readMoreButton = document.createElement('p');
            readMoreButton.classList.add('read-more');
            readMoreButton.textContent = 'Show more...';
            readMoreButton.addEventListener('click', function() {
                element.classList.toggle('full-height');
                readMoreButton.textContent = element.classList.contains('full-height') ? 'Show less' : 'Show more...';
            });
            element.parentNode.insertBefore(readMoreButton, element.nextSibling);
            element.classList.add('collapsed');
        }
    }
}

// Add a dark theme toggle function to checkbox element

function darkThemeToggle(checkbox) {
    const bodyElement = document.querySelector('#app');
    const isDarkTheme = localStorage.getItem('dark')

    if (isDarkTheme) {
        bodyElement.classList.add('dark');
        checkbox.setAttribute('checked', true)
    }

    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            bodyElement.classList.add('dark');
            localStorage.setItem('dark', 'dark');
        }
        else {
            bodyElement.classList.remove('dark');
            localStorage.removeItem('dark');
        }
    })
}



const darkThemeSwitcher = document.querySelector('.dark-theme');
darkThemeToggle(darkThemeSwitcher);

const elementsList = document.querySelectorAll('.item-wrapper');
addShowMoreButton(elementsList);
