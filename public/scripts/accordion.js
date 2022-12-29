const label = document.getElementsByClassName('header-expand'); // List of all announcement labels

label[0].nextElementSibling.classList.toggle('active');

for (i = 0; i < label.length; i++) {
    label[i].addEventListener('click', function() {

        // Probably not a good idea to do this if changes need to be made later. Consider revising.
        for (i = 0; i < label.length; i++) {
            if (label[i] != this) {
                label[i].nextElementSibling.classList.remove('active');
            }
        }
        this.nextElementSibling.classList.toggle('active');
    })
}
