const listView = document.getElementById('list-view');

import { listInputs, search_results } from './inputs.js';

var allItems = [];
var results = [];
var currentId = 0;

export function id() {
  return String(currentId++);
}

export function isNumber(value) {
	const validNumbers = '0123456789';
	value = value.split('');
	return !value.some(ch => validNumbers.indexOf(ch) === -1);
}

export function findItem(type, value) {
	switch (type) {
		case "value":
			return allItems.some(item => item.value === value);
		case "id":
			return allItems.some(item => item.id === value);
		default:
			return false;
	}
}

export function searchByValue(value) {
	let allValues = [];

	for (let item of allItems) {
		if (item.value.indexOf(value) !== -1) {
			allValues.push(item);
		}
	}

	return allValues;
}

export function getItem(id) {
	for (let i = 0; i < allItems.length; i++) {
		const item = allItems[i];
		if (item.id === id) {
			return item;
		}
	}
	return {};
}

export function insertItem(obj) {
  allItems.push(obj);
}

export function removeItemById(id) {
	for (let i = 0; i < allItems.length; i++) {
		const item = allItems[i];
		if (item.id === id) {
			item.element.remove();
			allItems = allItems.filter(t => t.id !== id);
			break;
		}
	}

	for (let i = 0; i < results.length; i++) {
		const result = results[i];
		if (result.id === id) {
			result.element.remove();
			results = results.filter(rs => rs.id !== id);
		}
	}

	insertIntoResults(results);
}

export function refreshList() {
  listView.childNodes.forEach(node => {
    if (node["classList"]) {
      if (node.classList.contains('item')) node.remove();
    }
  });

  allItems.forEach(item => {
    listView.appendChild(item.element);
  });
}

export function resetInputs() {
	listInputs.forEach(input => {
		input.value = "";
	});
}

export function insertIntoResults(listItems=results) {
	results = listItems;
	search_results.innerHTML = null;

	listItems.forEach(item => {
		let newItem = item.element.cloneNode(true);
		newItem.addEventListener('click', () => extendElement(item.value, item.id));
		search_results.appendChild(newItem);
	});
}

export function extendElement(value, id) {
	const buttonClose = document.createElement('button');
	const container = document.createElement('main');
	const center = document.createElement('div');
	const span = document.createElement('span');
	const p = document.createElement('p');

	buttonClose.classList.add('modal_button');
	container.classList.add('modal');
	center.classList.add('modal_center');
	span.classList.add('modal_id');
	p.classList.add('modal_text');


	buttonClose.textContent = "close";
	p.textContent = String(value);
	span.textContent = String(id);

	center.appendChild(span);
	center.appendChild(p);

	container.appendChild(buttonClose);
	container.appendChild(center);

	buttonClose.addEventListener('click', () => {
		container.remove();
	});

	document.body.appendChild(container);
}

export function createElement(value, id) {
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
