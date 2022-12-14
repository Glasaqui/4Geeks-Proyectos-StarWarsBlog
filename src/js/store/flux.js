const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[

			],
			people: [

			],
			planets: [

			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				let resp= await fetch(process.env.API_URL+"people/")
				let json= await resp.json()
				let personajes= json.results
				setStore({ people: personajes });
			},
			loadSomeData2: async () => {
				let resp= await fetch(process.env.API_URL+"planets/")
				let json= await resp.json()
				let planetas= json.results
				setStore({ planets: planetas });
			},
			addFavorite: async (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
