import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const AddContact = () => {
	const { actions } = useContext(Context);

	const defaultContact = {
		id: 0,
		imagen:
			"https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1682895038~exp=1682895638~hmac=ca33bcd0e0441e977c6ee1aac60c6e86f44c146c68def83605e0c1102b4282d4",
		fullName: "",
		email: "",
		agenda_slug: "",
		address: "",
		phone: ""
	};

	const [item, setItem] = useState(defaultContact);

	const AddNewContact = () => {
		actions.newContact(item);
		setItem(defaultContact);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={item.fullName || ""}
							onChange={event => {
								setItem({
									...item,
									fullName: event.target.value
								});
							}}
							className="form-control rounded-0"
							id="contactName"
							placeholder="Enter Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={item.email || ""}
							onChange={event => {
								setItem({
									...item,
									email: event.target.value
								});
							}}
							className="form-control rounded-0"
							id="contactEmail"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={item.phone || ""}
							onChange={event => {
								setItem({
									...item,
									phone: event.target.value
								});
							}}
							className="form-control rounded-0"
							id="contactPhone"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={item.address || ""}
							onChange={event => {
								setItem({
									...item,
									address: event.target.value
								});
							}}
							className="form-control rounded-0"
							id="contactAddress"
							placeholder="Enter address"
						/>
					</div>
					<button
						onClick={() => (item.fullName != "" ? AddNewContact() : () => {})}
						type="button"
						className="btn btn-primary form-control"
						style={{ backgroundColor: "teal", border: 0 }}>
						Save Contact
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
