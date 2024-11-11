'use strict';

import burger from "./src/js/burger/burger";
import replaceHeaderItems from "./src/js/header/replaceHeaderItems";
import tabs from "./src/js/tabs";

document.addEventListener('DOMContentLoaded', () => {

  replaceHeaderItems();

  tabs();

  burger();
})