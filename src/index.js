(function () {
	const url =
		'https://services.odata.org/TripPinRESTierService/(S(j3a2sx1yypgxj1mpzjgmsrgn))/People';

	const peopleList = document.getElementById('people');
	let content = 'loading...';
	peopleList.innerHTML = content;

	async function getPeople() {
		const response = await fetch(url);
		const json = await response.json();
		const userNames = json.value.map((x) => x['UserName']);

		peopleList.textContent = '';

		userNames.forEach((name) => {
			const li = document.createElement('li');
			li.textContent = name;
			peopleList.append(li);
		});
	}

	getPeople();
})();

// import App from './App.svelte';

// const app = new App({
// 	target: document.getElementById('content'),
// 	props: {
// 		name: 'world',
// 	},
// });

// export default app;
