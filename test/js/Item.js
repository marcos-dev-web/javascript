import {
	findItem,
	refreshList,
	insertItem,
	id,
	isNumber,
	resetInputs,
	removeItemById,
	getItem,
	searchByValue,
	insertIntoResults,
	extendElement,
} from "./utils.js";

import { new_input, del_input, edit_id, edit_input, search_input } from "./inputs.js";

function createElement(value, id) {
	let container = document.createElement("li");
	let spanId = document.createElement("span");
	let pContent = document.createElement("p");

	container.classList.add("item");
	spanId.textContent = String(id);
	pContent.textContent = String(value);

	container.appendChild(spanId);
	container.appendChild(pContent);

	return container;
}

class Item {
	new_() {
		const valueInput = String(new_input.value).trim();

		if (valueInput.length === 0) {
			alert("input cannot be null!");
			return;
		}
		if (findItem("value", valueInput)) {
			alert("already exist this value!");
			return;
		}

		const ID = id();
		const element = createElement(valueInput, ID);

		insertItem({
			element: element,
			value: valueInput,
			id: ID,
		});

		element.addEventListener('click', () => extendElement(valueInput, ID));

		refreshList();
		resetInputs();
	}

	del_() {
		const id = String(del_input.value).trim();

		if (id.length === 0) {
			alert(`Insert a valid id`);
			return;
		}

		if (!isNumber(id)) {
			alert(`Invalid id: [${id}]`);
			return;
		}

		if (!findItem("id", id)) {
			alert(`Item with id [${id}] not found`);
			return;
		}

		removeItemById(id);
		resetInputs();
	}

	edit_() {
		const id = String(edit_id.value).trim();
		const value = String(edit_input.value).trim();

		if (!isNumber(id)) {
			alert(`id [${id}] is not valid!`);
			return;
		}
		if (!findItem("id", id)) {
			alert(`the item with id [${id}] not exist!`);
			return;
		}

		if (value.length === 0) {
			alert('the length cannot be 0');
			return;
		}

		const item = getItem(id);
		if (item.value === value) {
			alert(`the values are equals`);
			return;
		}

		console.log('oi');
		item.element.getElementsByTagName('p')[0].textContent = value;
		refreshList();
		resetInputs();
	}

	search_() {
		const value = String(search_input.value).trim();

		if (value.length === 0) return;
		if (!isNumber(value)) {
			const results = searchByValue(value);
			insertIntoResults(results);
		}

	}
}

export default Item;
