import {
	LegacyCard,
	Layout,
	Text,
	FormLayout,
	TextField,
	Select,
} from "@shopify/polaris";
import { useTranslation } from "react-i18next";
import "../../style/app.css";
import { useCallback, useState } from "react";
import * as React from "react";
const SetupAutomation = ({ setAutomationData }) => {
	const [title, setTitle] = useState("");
	const handleTitleChange = useCallback((value) => {
		setTitle(value);
		setAutomationData(value, startTime, endTime, hour, selected);
	}, []);
	const [hour, setHour] = useState("");
	const handleHourChange = useCallback((value) => {
		setHour(value);
		setAutomationData(title, startTime, endTime, hour, selected);
	}, []);
	const [startTime, setStartTime] = useState("");
	const handleStartTimeChange = useCallback((value) => {
		setStartTime(value);
		console.log(startTime);
		setAutomationData(title, startTime, endTime, hour, selected);
	}, []);
	const [endTime, setEndTime] = useState("");
	const handleEndTimeChange = useCallback((value) => {
		setEndTime(value);
		console.log(endTime);
		setAutomationData(title, startTime, endTime, hour, selected);
	}, []);

	const [selected, setSelected] = useState("today");

	const handleSelectChange = useCallback((value) => {
		setSelected(value);
		setAutomationData(title, startTime, endTime, hour, selected);
	}, []);

	const options = [
		{ label: "Monday", value: 1 },
		{ label: "Tuesday", value: 2 },
		{ label: "Wednesday", value: 3 },
		{ label: "Thursday", value: 4 },
		{ label: "Friday", value: 5 },
		{ label: "Saturday", value: 6 },
		{ label: "Sunday", value: 0 },
	];
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<Layout.Section>
				<LegacyCard title="Setup">
					<div style={{ height: 500, width: 500, padding: 20 }}>
						<FormLayout>
							<TextField
								type="text"
								label={
									<Text
										variant="headingSm"
										as="h3"
									>
										Email title
									</Text>
								}
								value={title}
								labelAction={"Required"}
								onChange={handleTitleChange}
							></TextField>
							<TextField
								type="time"
								label={
									<Text
										variant="headingSm"
										as="h3"
									>
										Hour send
									</Text>
								}
								value={hour}
								labelAction={"Required"}
								onChange={handleHourChange}
							></TextField>
							<Select
								label="Day send"
								options={options}
								onChange={handleSelectChange}
								value={selected}
							/>
							<TextField
								type="date"
								label={
									<Text
										variant="headingSm"
										as="h3"
									>
										Start time
									</Text>
								}
								value={startTime}
								labelAction={"Required"}
								onChange={handleStartTimeChange}
							></TextField>
							<TextField
								type="date"
								label={
									<Text
										variant="headingSm"
										as="h3"
									>
										End time
									</Text>
								}
								value={endTime}
								labelAction={"Required"}
								onChange={handleEndTimeChange}
							></TextField>
						</FormLayout>
					</div>
				</LegacyCard>
			</Layout.Section>

			<Layout.Section>
				<LegacyCard title="Template">
					<img
						alt="Black choker necklace"
						src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
						style={{
							width: "100%",
							height: "500px",
							objectFit: "fill",
							padding: "10px",
							borderRadius: 20,
						}}
					/>
				</LegacyCard>
			</Layout.Section>
		</div>
	);
};

export default SetupAutomation;
