function findCurrentSelection(collection){
	for (let i=0; i<collection.length; i++){
		if (getComputedStyle(collection[i]).display != 'none'){
			console.log('current image: ' + collection[i].name);
			return i;
		}
	}
}

function changeCurrentSelectionName(newLabel){
	let currentSelectionName = document.querySelector('#current-selection-name');
	currentSelectionName.textContent = newLabel;
}

function changeCurrentSelection(collection, newSelection=0){
	let currentSelection = findCurrentSelection(collection);
	collection[currentSelection].style.setProperty('display', 'none');
	collection[newSelection].style.setProperty('display', 'block');
}

function changeCurrentSelectionBg(newBg){
	body=document.querySelector('body');
	body.style.backgroundImage = `url('bg/workshop_${newBg}_bg.jpg')`;
}

function selectPrevious(collection){
	let currentSelection = findCurrentSelection(collection);
	let previousSelection;

	if (currentSelection-1<0){
		previousSelection = collection.length-1;
	}
	else{
		previousSelection = currentSelection-1;
	}

	changeCurrentSelectionBg(collection[previousSelection].name);
	changeCurrentSelectionName(collection[previousSelection].name);
	changeCurrentSelection(collection, previousSelection);
}

function selectNext(collection){
	let currentSelection = findCurrentSelection(collection);
	let nextSelection;

	if (currentSelection+1>=collection.length){
		nextSelection = 0;
	}
	else{
		nextSelection = currentSelection+1;
	}

	changeCurrentSelectionBg(collection[nextSelection].name);
	changeCurrentSelectionName(collection[nextSelection].name);
	changeCurrentSelection(collection, nextSelection);
}

const imgSelections=document.querySelectorAll('#current-selection img');
console.log(imgSelections);
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button')

nextButton.addEventListener('click', ()=>{selectNext(imgSelections)});
previousButton.addEventListener('click', ()=>{selectPrevious(imgSelections)});

/*Pre-loading backgrounds*/
for (let i=1; i<=imgSelections.length;i++){
	console.log('bg' + i + 'loaded');
	selectNext(imgSelections);
}

