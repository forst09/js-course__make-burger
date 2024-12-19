import closeDialog from "../dialog/closeDialog";


export default function submitCheckout() {
    const checkoutForm = document.querySelector('.checkout__form');
    const dialogOrderSent = document.querySelector('.dialog-order-sent');
    const dialogCheckout = document.querySelector('.dialog-checkout');

    console.log(checkoutForm, dialogOrderSent, dialogCheckout)
    if (checkoutForm && dialogOrderSent && dialogCheckout) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            dialogCheckout.close();
            dialogOrderSent.showModal();
            closeDialog(dialogOrderSent);
        })
    }
}