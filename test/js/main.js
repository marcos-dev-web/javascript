import {
	new_input,
	new_button,
	del_input,
	del_button,
	edit_input,
	edit_button,
	search_input,
	search_button,
} from "./inputs.js";

import Item from "./Item.js";

const item = new Item();

function setListeners() {
	new_button.addEventListener("click", item.new_);
	new_input.addEventListener("keydown", (e) => e.key === "Enter" && item.new_());

	del_button.addEventListener("click", item.del_);
	del_input.addEventListener("keydown", (e) => e.key === "Enter" && item.del_());

	edit_input.addEventListener("keydown", (e) => e.key === "Enter" && item.edit_());
	edit_button.addEventListener("click", item.edit_);

	search_input.addEventListener("keydown", (e) => e.key === "Enter" && item.search_());
	search_button.addEventListener("click", item.search_);
}

setListeners();
