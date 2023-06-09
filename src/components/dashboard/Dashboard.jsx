import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { setFormMode } from "../../features/modal/FormSlice";
import "./Dashboard.css";
import Tabs from "../Tabs/Tabs";
import Modal from "../common/Modal";

const Dashboard = () => {
	const modal = useSelector((store) => store.modal.isModalOpen);
	const dispatch = useDispatch();

	const tabs = [
		{
			label: "Events",
		},
		{
			label: "Eras",
		},
	];

	const handleCreate = () => {
		dispatch(openModal());
		dispatch(setFormMode("create"));
	};

	return (
		<div className="dashboard_container">
			<div className="dashboard_info">
				<div className="dashboard_text">
					<h1>Create Timeline</h1>
					<p>Create, edit and access era and events in the timeline</p>
				</div>
				<div className="dropdown">
					<button className="btn">Create</button>
					<div className="dropdown_content">
						<a onClick={handleCreate}>Create New Era</a>
						<a href="#">Create New Event</a>
					</div>
				</div>
			</div>

			<div className="dashboard_tabs">
				<Tabs tabs={tabs} />
				{modal && <Modal />}
			</div>
		</div>
	);
};

export default Dashboard;
