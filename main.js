'use strict';

import burger from "./src/js/burger/burger";
import showDialog from "./src/js/dialog/showDialog";
import changeLabelPosition from "./src/js/form/changeLabelPosition";
import submitCheckout from "./src/js/form/submitCheckout";
import replaceHeaderItems from "./src/js/header/replaceHeaderItems";
import tabs from "./src/js/tabs";

document.addEventListener('DOMContentLoaded', () => {

  replaceHeaderItems();

  tabs();

  burger();

  changeLabelPosition();

  const checkoutBtn = document.querySelector('.summary__btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      showDialog(e);
    })
  }

  submitCheckout();
})