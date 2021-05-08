const listView = document.getElementById('list-view');

import { listInputs, search_results } from './inputs.js';

var allItems = [];
var results = [];

export function id() {
  return String(new Date().getTime()).slice(10, 13);
}

export function getItem(id) {
	for (let i = 0; i < allItems.length; i++) {
		if (allItems[i].id === id) {
			return allItems[i];
		}
	}
	return {};
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
		const item = results[i];
		if (item.id === id) {
			item.element.remove();
			results = results.filter(t => t.id !== id);
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

  allItems.forEach(node => {
    listView.appendChild(node.element);
  });
}

export function resetInputs() {
	listInputs.forEach(input => {
		input.value = "";
	});
}

export function insertItem(obj) {
  allItems.push(obj);
}

export function isNumber(value) {
	const allowedChars = '0123456789';
	const v = value.split('');
	return !v.some(ch => allowedChars.indexOf(ch) === -1);
}

export function searchByValue(value) {
	let allValues = [];

	for (let v of allItems) {
		if (v.value.indexOf(value) !== -1) {
			allValues.push(v);
		}
	}

	return allValues;
}

export function insertIntoResults(listItems=results) {
	results = listItems;
	search_results.innerHTML = null;

	listItems.forEach(item => {
		let newItem = item.element.cloneNode(true);
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
