import Alpine from "alpinejs";
import $ from "jquery";

import intersect from "@alpinejs/intersect";
import focus from "@alpinejs/focus";

Alpine.plugin(intersect);
Alpine.plugin(focus);

window.Alpine = Alpine;
window.$ = $;

Alpine.start();