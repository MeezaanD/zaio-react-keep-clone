import React, { useState } from "react";

function Sidebar({ showArchived, toggleView }) {
	const [hovered, setHovered] = useState(false);
	const [activeItem, setActiveItem] = useState(showArchived ? "archive" : "notes");

	const sidebarItems = [
		{ key: "notes", icon: "lightbulb", label: "Notes" },
		{ key: "reminders", icon: "notifications", label: "Reminders" },
		{ key: "edit", icon: "edit", label: "Edit labels" },
		{ key: "archive", icon: "archive", label: "Archive" },
		{ key: "trash", icon: "delete", label: "Trash" }
	];

	return (
		<div
			className={`sidebar ${hovered ? "expanded" : ""}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{sidebarItems.map((item) => (
				<div
					key={item.key}
					className={`sidebar-item ${activeItem === item.key ? "sidebar-active-item" : ""}`}
					onClick={() => {
						setActiveItem(item.key);
						if (item.key === "archive" || item.key === "notes") {
							toggleView();
						}
					}}
				>
					<span className={`material-symbols-outlined ${activeItem === item.key ? "active" : ""}`}>
						{item.icon}
					</span>
					{hovered && <span className="sidebar-text">{item.label}</span>}
				</div>
			))}
		</div>
	);
}

export default Sidebar;
