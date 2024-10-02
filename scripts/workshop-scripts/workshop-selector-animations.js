function activateAnimation(element, classAnimation){
	
	element.classList.remove(classAnimation);
	element.classList.add(classAnimation);

	console.log(element.name + ' Clases: ' + element.classList)
}

function deleteAnimation(element, classAnimation){
	element.classList.remove(classAnimation);

}