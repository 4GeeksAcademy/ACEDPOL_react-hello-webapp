import React from "react";

export const Contact = ({ name, address, phone, email }) => (
        <div className="d-flex justify-content-center border-bottom py-3 px-3">
            <img src="https://picsum.photos/id/237/536/354" className="rounded-circle" alt="contact-image.png" style={{width:150,height:150}}/>
            <div className="ms-5 w-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="fw-bold text-black m-0">{name}</h5>
                    <div className="d-flex">
                        <div className="mx-3"><i className="fa-solid fa-pencil"></i></div>
                        <div className="mx-3"><i className="fa-solid fa-trash-can"></i></div>
                    </div>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-location-dot mx-2"></i>
                    <p className="m-0">{address}</p>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-phone-flip mx-2"></i>
                    <p className="m-0">{phone}</p>
                </div>
                <div className="text-black-50 d-flex align-items-center">
                    <i className="fa-solid fa-envelope mx-2"></i>
                    <p className="m-0">{email}</p>
                </div>                
            </div>
        </div>
);