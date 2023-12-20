import {
	Button,
	LegacyCard,
	Layout,
	Text,
	FormLayout,
	TextField,
	RadioButton,
	LegacyStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import "../../style/app.css";
import { useCallback, useState } from "react";
import * as React from "react";

const SetupAutomation = () => {
	const [title, setTitle] = useState("");
	const handleTitleChange = useCallback((value) => setTitle(value), []);

	const handleSubmit = useCallback(() => setTitle(""), []);
	const [radioValue, setRadioValue] = useState("disabled");
	const handleRadioChange = useCallback(
		(_, newValue) => setRadioValue(newValue),
		[]
	);

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<Layout.Section>
				<LegacyCard title="Setup">
					<div style={{ height: 500, width: 500, padding: 20 }}>
						<FormLayout>
							<TextField
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
							<LegacyStack vertical>
								<RadioButton
									label="Accounts are optional"
									helpText="Customers will be able to check out with a customer account or as a guest."
									id="optional"
									name="accounts"
									checked={radioValue === "optional"}
									onChange={handleRadioChange}
								/>
								<RadioButton
									label="Accounts are optional"
									helpText=""
									id="optional"
									name="accounts"
									checked={radioValue === "optional"}
									onChange={handleRadioChange}
								/>
							</LegacyStack>
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
