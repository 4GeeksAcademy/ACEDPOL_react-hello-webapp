import React, { useEffect, useContext } from "react";
import { Context } from "../store/contactContext";
import { Contact } from "../component/contact";
import { Link } from "react-router-dom";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => { 
		// La función loadContacts se llama automáticamente en injectContext 
	}, []);

	return (
		<div className="container w-50">
			<ul className="list-group">
				{ ( Array.isArray(store.contacts) && store.contacts.length > 0 ) ? (
					store.contacts.map((contact, index) => {
						return (
							<div key={index}>
								<Contact contact={contact} />
							</div>
						);
					})
				) : ( <p className="fw-bold text-danger">No contacts available...</p> )}				
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
