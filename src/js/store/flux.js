const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			title: "Titulo para hacer una prueba",
			contId: 0,
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadContacts: async () => {
				// const auxStore = getStore();

				// Services
				try {
					//let resp = await fetch("https://fakestoreapi.com/products");
					const auxStore = getStore();
					let data = [];
					if (auxStore.contacts.length === 0) {
						let item = {
							id: 0,
							imagen:
								"https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1682895038~exp=1682895638~hmac=ca33bcd0e0441e977c6ee1aac60c6e86f44c146c68def83605e0c1102b4282d4",
							fullName: "Rafael Jimenez",
							email: "rjmoreno2022@gmail.com",
							agenda_slug: "Agenda",
							address: "Caracas, Venezuela",
							phone: "4241235555"
						};
						data = [...auxStore.contacts, item];
						setStore({ contacts: data });
					} else {
						data = [...auxStore.contacts];
						setStore({ contacts: auxStore.contacts });
					}
				} catch (err) {
					// eslint-disable-next-line no-console
					console.log(err);
				}
			},
			newContact: newItem => {
				let auxStore = getStore();
				setStore({ contId: auxStore.contId + 1 });
				newItem.id = auxStore.contId;
				setStore({ contacts: [...auxStore.contacts, newItem] });

				//auxStore = getStore();
				alert("New Contact added successfully!");
			},
			removeContact: target => {
				//cambia el precio de un producto
				const auxStore = getStore();
				console.log(target);
				setStore({ contacts: auxStore.contacts.filter(item => item.id != target.id) });
			},
			editContact: target => {
				const auxStore = getStore();
				let auxContact = auxStore.contacts.find(item => item.id == target.id);
				auxContact.fullName = target.fullName;
				auxContact.email = target.email;
				auxContact.address = target.address;
				auxContact.phone = target.phone;
				console.log(auxStore.contacts);
				alert("Contact edited successfully!");
			}
		}
	};
};

export default getState;
