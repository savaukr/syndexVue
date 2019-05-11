document.addEventListener('DOMContentLoaded', function(){
	let menuVertical = document.getElementById('menuVertical');
	menuVertical.addEventListener('click', function(e){
		let actived = menuVertical.querySelector('.contact_active');
		if (actived) actived.classList.remove('contact_active');
		let target = e.target;
		while (!target.classList.contains('contact')) {
			target = target.parentNode;
		};
		target.classList.add('contact_active');
	});

	let menuScroll = document.getElementById('menuScroll');
	menuScroll.addEventListener('click', function() {
		document.getElementById('menuVertical').classList.toggle('unvisible');
		setTimeout(function(){ document.getElementById('leftContainer').classList.toggle('close')}, 600);
		this.classList.toggle('open');
	})
}, false);