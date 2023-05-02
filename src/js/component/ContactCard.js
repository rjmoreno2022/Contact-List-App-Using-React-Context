import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { ModalEditContact } from "../component/ModalEditContact.js";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { actions } = useContext(Context);
	const [showModalEdit, setShowModalEdit] = useState(false);

	const showModal = () => {
		setShowModalEdit(true);
	};

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src={props.contactItem.imagen}
						alt={props.contactItem.fullName}
						className="rounded-circle mx-auto d-block img-fluid"
						style={{ width: "150px", height: "150px" }}
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={showModal}>
							{/* <Link to={`/edit/:${props.contactItem.id}`}>
								<i className="fas fa-pencil-alt mr-3" />
							</Link> */}
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						{/* <button className="btn" onClick={props.onDelete}>
							<i className="fas fa-trash-alt" />
						</button> */}
						<button className="btn" onClick={() => actions.removeContact(props.contactItem)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.contactItem.fullName}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.contactItem.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title={props.contactItem.phone}
					/>
					<span className="text-muted small">{props.contactItem.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.contactItem.email}</span>
				</div>
			</div>
			<ModalEditContact
				contact={props.contactItem}
				show={showModalEdit}
				onClose={() => setShowModalEdit(false)}
			/>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	contactItem: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	contactItem: {
		id: 0,
		imagen: MikePhoto,
		fullName: "Rafael Jimenez",
		email: "rjmoreno2022@gmail.com",
		agenda_slug: "Agenda",
		address: "5842 Hillcrest Rd",
		phone: "(870) 288-4149"
	},
	onDelete: null
};
