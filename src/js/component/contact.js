import React, { useContext } from "react";
import { Context } from "../store/contactContext";
import { useNavigate } from "react-router-dom";

export const Contact = ({ contact }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleEditClick = () => { 
        actions.setEditingContact(contact); 
        navigate(`/edit-contact/${contact.id}`); 
    };

    const handleDeleteClick = () => { 
        actions.deleteContact(contact.id); 
    };

    return (
        <div className="d-flex justify-content-center border-bottom py-3 px-3">
            <img src="https://picsum.photos/id/237/536/354" className="rounded-circle" alt="contact-image.png" style={{width:150,height:150}}/>
            <div className="ms-5 w-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="fw-bold text-black m-0">{contact.name}</h5>
                    <div className="d-flex">
                        <div className="px-3 rounded-pill icon-hover clickable" onClick={handleEditClick}>
                            <i className="fa-solid fa-pencil" />
                        </div>
                        <div className="px-3 rounded-pill icon-hover clickable" onClick={handleDeleteClick}>
                            <i className="fa-solid fa-trash-can" />
                        </div>
                    </div>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-location-dot mx-2"></i>
                    <p className="m-0">{contact.address || "Dirección no disponible"}</p>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-phone-flip mx-2"></i>
                    <p className="m-0">{contact.phone || "Teléfono no disponible"}</p>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-envelope mx-2"></i>
                    <p className="m-0">{contact.email || "Correo no disponible"}</p>
                </div>                
            </div>
        </div>
    )
};