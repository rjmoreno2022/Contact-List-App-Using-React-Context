import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalEditContact = props => {
	const { actions } = useContext(Context);
	const [editedContact, setEditedContact] = useState(props.contact);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setEditedContact({ ...editedContact, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		actions.editContact(editedContact);
		props.onClose();
	};

	return (
		<div
			className="modal fade show"
			tabIndex="-1"
			role="dialog"
			style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<form onSubmit={handleSubmit}>
						<div className="modal-header">
							<h5 className="modal-title">Edit Contact</h5>
							<button type="button" className="close" onClick={props.onClose}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									name="fullName"
									value={editedContact.fullName}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									name="email"
									value={editedContact.email}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									name="phone"
									value={editedContact.phone}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									name="address"
									value={editedContact.address}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={props.onClose}>
								Close
							</button>
							<button type="button" className="btn btn-primary" onClick={handleSubmit}>
								Save changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ModalEditContact.propTypes = {
	contact: PropTypes.object,
	onSave: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEditContact.defaultProps = {
	contact: null,
	onSave: null,
	onClose: null,
	show: false
};
