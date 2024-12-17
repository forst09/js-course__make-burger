import closeDialog from "./closeDialog";

export default function showDialog({ target }) {
    const dialogName = target.getAttribute('data-dialog');
    const dialog = document.querySelector(`.${dialogName}`);
    dialog.showModal();
    document.body.classList.add('scroll-lock');
    closeDialog(dialog);
}
