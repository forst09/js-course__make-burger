export default function closeDialog(dialog) {
    function checkClick({ target }) {
        if (target.classList.contains('dialog__close-js') || target === dialog) {
            dialog.close();
            document.body.classList.remove('scroll-lock');
            document.removeEventListener('click', checkClick);
        }
    }
    document.addEventListener('click', checkClick);
}