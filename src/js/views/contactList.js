import React, { useEffect, useContext } from "react";
import { Context } from "../store/contactContext";
import { Contact } from "../component/contact";
import { Link } from "react-router-dom";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => { 
		// La función loadContacts se llama automáticamente en injectContext 
		// actions.loadContacts(); 
		// actions.loadSampleContacts();
	}, []);

	return (
		<div className="container w-50">
			<ul className="list-group">
				{ Array.isArray(store.contacts) ? (
					store.contacts.map((contact, index) => {
						return (
							<div key={index}>
								<Contact
									contact={contact} 
									name={contact.name} 
									address={contact.address || "Dirección no disponible"} 
									phone={contact.phone || "Teléfono no disponible"} 
									email={contact.email || "Correo no disponible"}
								/>
							</div>
						);
					})
				) : ( <p>No contacts available</p> )}				
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
