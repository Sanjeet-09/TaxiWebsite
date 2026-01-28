document.addEventListener('DOMContentLoaded', function () {
    const bookButtons = document.querySelectorAll('.btn-outline');
    const whatsappNumber = "910000000000";

    bookButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = '/form';
        });
    });
});
