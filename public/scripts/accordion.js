const accordion = document.getElementsByClassName('accordion'); // List of all accordions on page

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}