const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] // lista de contactos
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadContacts: () => {
				// Fetch: descarga los contactos del servidor
				fetch('https://playground.4geeks.com/contact/agendas/acedpol/contacts')
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))
					.then(data => console.log("Fetching realizado:", data))
					.catch(error => console.error("Error al descargar los contactos:", error));
			},
			// Acción para agregar un nuevo contacto 
			addContact: (contact) => { 
				const store = getStore();
				setStore({ contacts: [...store.contacts, contact] }); 

				// Post: Envía el nuevo contacto al servidor 
				fetch('https://playground.4geeks.com/contact/agendas/acedpol/contacts', { 
					method: 'POST', 
					headers: { 
						'Content-Type': 'application/json' 
					}, 
					body: JSON.stringify(contact) 
				})
				.then(response => response.json())
				.then(data => console.log("Contacto añadido:", data))
				.catch(error => console.error("Error al añadir el contacto:", error));
			},
			// Acción para cargar algunos contactos 
			loadSampleContacts: () => { 
				const contacts = [ 
					{ name: "Alice", address: "123 Main St", phone: "123-456-7890", email: "alice@example.com" }, 
					{ name: "Bob", address: "456 Oak Ave", phone: "987-654-3210", email: "bob@example.com" } 
				]; 
				setStore({ contacts }); 
			}
		}
	};
};

export default getState;
