'use strict';

import replaceHeaderItems from "./src/js/header/replaceHeaderItems";
import tabs from "./src/js/tabs";

document.addEventListener('DOMContentLoaded', () => {

  replaceHeaderItems();

  tabs();
})