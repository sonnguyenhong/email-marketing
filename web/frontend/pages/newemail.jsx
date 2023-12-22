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
import "../style/app.css";
import SelectEmailType from "../components/email/SelectEmailType";
import { useState } from "react";
import EditEmailContent from "../components/email/EditEmailContent";
import SelectCustomer from "../components/email/SelectCustomer";
import SetupAutomation from "../components/email/SetupAutomation";
import { saveEmailSchedule } from "../hooks/api";

const STEP = {
	SELECT_EMAIL_TYPE: 1,
	EDIT_EMAIL_CONTENT: 2,
	SELECT_CUSTOMER: 3,
	SETUP_AUTOMATION: 4,
};

export default function NewEmail() {
	const { t } = useTranslation();
	const [step, setStep] = useState(STEP.SELECT_EMAIL_TYPE);
	const [category, setCategory] = useState();
	const [storeName, setStoreName] = useState();
	const [title, setTitle] = useState();
	const [thumbnail, setThumbnail] = useState();
	const [message, setMessage] = useState();
	const [btnContent, setBtnContent] = useState();
	const [btnTextColor, setBtnTextColor] = useState();
	const [btnBackGround, setBtnBackGround] = useState();
	const [selectedUser, setSelectedUser] = useState([]);

	const [titleEmail, setTitleEmail] = useState();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [hourSent, setHourSent] = useState();
	const [daySent, setDaySent] = useState();

	const handleNextStep = () => {
		if (step < STEP.SETUP_AUTOMATION) {
			setStep((step) => step + 1);
		}
	};

	const handleSubmit = () => {
		saveEmailSchedule({
			startDate: startDate,
			endDate: endDate,
			title: titleEmail,
			category: category,
			status: "Sent",
			customer: selectedUser,
			property: [
				{ property_id: "1", value: storeName },
				{ property_id: "2", value: title },
				{
					property_id: "3",
					value:
						"https://i2.wp.com/www.digital38.com.vn/wp-content/uploads/2020/12/email-marketing-1.jpeg?fit=2000%2C1333&ssl=1",
				},
				{ property_id: "4", value: message },
				{ property_id: "5", value: btnContent },
				{ property_id: "6", value: btnBackGround },
			],
		}).then(() => setStep(1));
	};
	const handleBackStep = () => {
		if (step > STEP.SELECT_EMAIL_TYPE) {
			setStep((step) => step - 1);
		}
	};
	const parentSelectTeamplate = (newStep, newTemplate) => {
		setStep(newStep);
		setCategory(newTemplate);
	};

	const setInfoMail = (
		storeName,
		title,
		thumbnail,
		message,
		btnContent,
		btnTextColor,
		btnBackGround
	) => {
		setStoreName(storeName);
		setTitle(title);
		setThumbnail(thumbnail);
		setMessage(message);
		setBtnContent(btnContent);
		setBtnTextColor(btnTextColor);
		setBtnBackGround(btnBackGround);
	};
	const setupAutomationData = (
		emailTitle,
		startDate,
		endDate,
		hourSent,
		daySent
	) => {
		setTitleEmail(emailTitle);
		setStartDate(startDate);
		setEndDate(endDate);
		setHourSent(hourSent);
		setDaySent(daySent);
	};
	return (
		<Page>
			<TitleBar
				title="Email Automation"
				primaryAction={null}
			/>
			<Layout>
				<Layout.Section className="abc">
					<ul className="progressbar">
						<li className={`${step >= STEP.SELECT_EMAIL_TYPE ? "active" : ""}`}>
							Select email type
						</li>
						<li
							className={`${step >= STEP.EDIT_EMAIL_CONTENT ? "active" : ""}`}
						>
							Edit email content
						</li>
						<li className={`${step >= STEP.SELECT_CUSTOMER ? "active" : ""}`}>
							Select customers
						</li>
						<li className={`${step >= STEP.SETUP_AUTOMATION ? "active" : ""}`}>
							Setup automation
						</li>
					</ul>
				</Layout.Section>
				{step === STEP.SELECT_EMAIL_TYPE ? (
					<SelectEmailType selectTemplate={parentSelectTeamplate} />
				) : null}
				{step === STEP.EDIT_EMAIL_CONTENT ? (
					<EditEmailContent
						category={category}
						setInfoMail={setInfoMail}
					/>
				) : null}
				{step === STEP.SELECT_CUSTOMER ? (
					<SelectCustomer onSelectUser={setSelectedUser} />
				) : null}
				{step === STEP.SETUP_AUTOMATION ? (
					<SetupAutomation setAutomationData={setupAutomationData} />
				) : null}
				<Layout.Section>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						{step > STEP.SELECT_EMAIL_TYPE ? (
							<Button onClick={handleBackStep}>Back</Button>
						) : null}
						<Button
							primary
							onClick={
								step < STEP.SETUP_AUTOMATION ? handleNextStep : handleSubmit
							}
						>
							{step < STEP.SETUP_AUTOMATION ? "Next" : "Submit"}
						</Button>
					</div>
				</Layout.Section>
			</Layout>
		</Page>
	);
}
