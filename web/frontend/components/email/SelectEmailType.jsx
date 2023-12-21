import {
	Button,
	LegacyCard,
	Page,
	Layout,
	TextContainer,
	Thumbnail,
	Grid,
	Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import "../../style/app.css";

const SelectEmailType = ({ selectTemplate }) => {
	const chooseTemplate = (newTemplate) => {
		const newStep = 2;
		// Call the callback function to update data in the parent component
		selectTemplate(newStep, newTemplate);
	};
	return (
		<div>
			<Layout.Section>
				<Text
					variant="headingMd"
					as="h6"
				>
					Subscriber activity
				</Text>
			</Layout.Section>
			<Layout.Section>
				<Grid>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Event Comming
							</p>
							<div className="template-email-card">
								<img
									alt="Black choker necklace"
									src="../../assets/eventComming.png"
									className="imageEmail"
								/>
							</div>
							<div className="div-btn">
								<Button onClick={() => chooseTemplate("EventComming")}>
									Select
								</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Gift Reminder
							</p>
							<div className="template-email-card">
								<img
									alt="Black choker necklace"
									src="../../assets/giftReminder.png"
									className="imageEmail"
								/>
							</div>
							<div className="div-btn">
								<Button onClick={() => chooseTemplate("reminder")}>
									Select
								</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								New Blog
							</p>
							<div className="template-email-card">
								<img
									alt="Black choker necklace"
									src="../../assets/blog.png"
									className="imageEmail"
								/>
							</div>
							<div className="div-btn">
								<Button onClick={() => chooseTemplate("blog")}>Select</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
				</Grid>
			</Layout.Section>
			<Layout.Section>
				<Text
					variant="headingMd"
					as="h6"
				>
					Commerce activity
				</Text>
			</Layout.Section>
			<Layout.Section>
				<Grid>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Gift Guider
							</p>
							<div className="template-email-card">
								<img
									alt="Black choker necklace"
									src="../../assets/giftGuide.png"
									className="imageEmail"
								/>
							</div>
							<div className="div-btn">
								<Button onClick={() => chooseTemplate("GiftGuide")}>
									Select
								</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Comming soon
							</p>
							<img
								alt="Black choker necklace"
								src="../../assets/empty.png"
								style={{ width: "100%", height: "300px", margin: "10px 0" }}
							/>
							<div className="div-btn">
								<Button>Select</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
					<Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
						<LegacyCard sectioned>
							<p
								style={{
									fontSize: "20px",
									fontWeight: "bold",
									textDecoration: "underline",
								}}
							>
								Comming soon
							</p>
							<img
								alt="Black choker necklace"
								src="../../assets/empty.png"
								style={{ width: "100%", height: "300px", margin: "10px 0" }}
							/>
							<div className="div-btn">
								<Button>Select</Button>
							</div>
						</LegacyCard>
					</Grid.Cell>
				</Grid>
			</Layout.Section>
		</div>
	);
};

export default SelectEmailType;
