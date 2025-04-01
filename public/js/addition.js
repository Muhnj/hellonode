document.getElementById('hideButton').addEventListener('click', function() {
    let paragraph = document.getElementById('myParagraph');
    paragraph.classList.toggle('hidden');
    paragraph.classList.toggle('background');
    paragraph.classList.toggle('show');
});