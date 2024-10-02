function findCurrentSelection(collection){
	for (let i=0; i<collection.length; i++){
		if (collection[i].classList.contains('main-selection')){
			return i;
		}
	}
	return 0;
}

function changeCurrentSelectionName(newLabel){
	let currentSelectionName = document.querySelector('#current-selection-name');
	currentSelectionName.textContent = newLabel;
}

function changeCurrentSelection(collection, newSelection=0, classAnimation=''){
	let currentSelection = findCurrentSelection(collection);

	collection[currentSelection].classList.remove('main-selection');
	collection[newSelection].classList.add('main-selection');
	
	activateAnimation(collection[newSelection], classAnimation);
	collection[currentSelection].classList.remove('left-slide', 'right-slide');
}

function changeCurrentSelectionBg(newBg){
	body=document.querySelector('body');
	body.style.setProperty('--smudge-bg', `url("../../bg/${newBg}_smudge_workshop_bg.png")`);
}

function changeWorkshopTitleLineColor(newColor){
	const workshopTitleLines = document.querySelectorAll('#workshop-title .line');

	for (let i=0; i<workshopTitleLines.length; i++){
		workshopTitleLines[i].style.setProperty('background-color', `var(--${newColor}-color)`);
	}
}

function increaseSelectionOrder(selection, increment){
	let selectionOrder = Number.parseInt(getComputedStyle(selection).order);
	let newSelectionOrder = Number.parseInt(selectionOrder + increment);
	selection.style.setProperty('order', newSelectionOrder.toString());
}

function selectPrevious(collection){
	let currentSelection = findCurrentSelection(collection);
	let oldOrder;
	let previousSelection;
	let nextSelection;

	if (currentSelection-1<0){
		previousSelection = collection.length-1;
	}
	else{
		previousSelection = currentSelection-1;
	}

	if (currentSelection+1>=collection.length){
		nextSelection = 0;
	}
	else{
		nextSelection = currentSelection+1;
	}

	changeCurrentSelectionBg(collection[previousSelection].name);
	changeCurrentSelectionName(collection[previousSelection].name);
	changeWorkshopTitleLineColor(collection[previousSelection].name);
	changeCurrentSelection(collection, previousSelection, 'right-slide');

	increaseSelectionOrder(collection[previousSelection], 1);
	increaseSelectionOrder(collection[currentSelection], 1);
	increaseSelectionOrder(collection[nextSelection], -2);
}

function selectNext(collection){
	let currentSelection = findCurrentSelection(collection);
	let previousSelection;
	let nextSelection;

	if (currentSelection+1>=collection.length){
		nextSelection = 0;
	}
	else{
		nextSelection = currentSelection+1;
	}

	if (currentSelection-1<0){
		previousSelection = collection.length-1;
	}
	else{
		previousSelection = currentSelection-1;
	}

	changeCurrentSelectionBg(collection[nextSelection].name);
	changeCurrentSelectionName(collection[nextSelection].name);
	changeWorkshopTitleLineColor(collection[nextSelection].name);
	changeCurrentSelection(collection, nextSelection, 'left-slide');
	
	increaseSelectionOrder(collection[previousSelection], 2);
	increaseSelectionOrder(collection[currentSelection], -1);
	increaseSelectionOrder(collection[nextSelection], -1);
}

const aImgSelections=document.querySelectorAll('#current-selection .side-selection');
console.log(aImgSelections);
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button')

nextButton.addEventListener('click', ()=>{selectNext(aImgSelections)});
previousButton.addEventListener('click', ()=>{selectPrevious(aImgSelections)});
