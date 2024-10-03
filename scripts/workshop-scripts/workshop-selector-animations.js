function activateAnimation(element, classAnimation){
	
	element.classList.remove(classAnimation);
	element.classList.add(classAnimation);

	console.log(element.name + ' Clases: ' + element.classList)
}

function resetAnimations(element){
	let animations = ['left-slide',
					 'right-slide',
					 'left-backslide',
					 'right-backslide',
					 'backright-slide',
					 'backleft-slide',
					 ];

	element.classList.remove(...animations);
}