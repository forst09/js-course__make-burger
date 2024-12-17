export default function pasteWarning(element) {
    if (!document.querySelector('.warning')) {
        const warning = document.createElement('div');
        warning.classList.add('warning');
        warning.innerHTML = `
            <div class="warning__icon img">
                <img class="img__img" src="/icons/warning-icon.png"/>
            </div>
            <span class="text-m text-semi">You are sure?</span>
        `;
        element.append(warning);
        setTimeout(() => {
            warning.classList.add('active');
        }, 100)

    }
}