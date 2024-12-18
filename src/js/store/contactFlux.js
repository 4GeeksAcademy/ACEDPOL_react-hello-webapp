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
				try { 
					fetch('https://playground.4geeks.com/contact/agendas/acedpol/contacts')
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))

					// Método con previo 'async' asignado a la función:
					// const response = await fetch('https://playground.4geeks.com/contact/agendas/acedpol/contacts'); 
					// if (!response.ok) { 
					// 	throw new Error(`HTTP error! status: ${response.status}`); 
					// } 
					// const data = await response.json(); 
					// setStore({ contacts: data.contacts });
				} catch (error) { 
					console.error("Error fetching contacts:", error); 
				} 
			},
			// Acción para agregar un nuevo contacto 
			addContact: (contact) => { 
				const store = getStore(); 
				setStore({ contacts: [...store.contacts, contact] }); 
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
