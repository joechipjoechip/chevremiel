import dataDispatcher from '../modules/dataDispatcher/main';

document.addEventListener('DOMContentLoaded', function() {

	let currentData;

	const dataDefine = () => {

		currentData = dataDispatcher();

		routineVideo(currentData.video);
		routineResetChoice();
		routineChoice(currentData.choices);
		routineCss(currentData.css);
		
	};

	const routineCss = obj => {

		if (obj.backgroundColor) {
				document.querySelector('.main-container').style.backgroundColor = obj.backgroundColor;
		}

		if (obj.linkColor) {

			let links = Array.from(document.querySelectorAll('#choiceNav a'));

			links.forEach(oneLink => {

				oneLink.style.color = obj.linkColor;

			});

		}

	}

	const routineVideo = obj => {

		let videoPath = 'assets/medias/videos/';

		if (obj.url) {
			document.querySelector('#videoPlayer').setAttribute('src', videoPath + obj.url + '.mp4');
		}
	}

	const routineResetChoice = () => {
		let choiceNav = document.querySelector('#choiceNav');
		choiceNav.innerHTML = '';
	}

	const routineChoice = arr => {
		let choiceNav = document.querySelector('#choiceNav');

		arr.forEach( oneChoice => {
				let choiceElement = document.createElement('a');

				choiceElement.classList.add('choiceElement');

				choiceElement.setAttribute('href', oneChoice.lien);
				choiceElement.innerText = oneChoice.text;

				choiceNav.appendChild(choiceElement);
		});
	}

	






	window.addEventListener('DOMContentLoaded', dataDefine);
	window.addEventListener('hashchange', dataDefine);


});
