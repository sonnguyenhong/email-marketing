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

	const handleNextStep = () => {
		if (step < STEP.SETUP_AUTOMATION) {
			setStep((step) => step + 1);
		}
	};

	const handleSubmit = () => {
		console.log(category);
	};
	const handleBackStep = () => {
		if (step > STEP.SELECT_EMAIL_TYPE) {
			setStep((step) => step - 1);
		}
	};
	const parentSelectTeamplate = (newStep, newTemplate) => {
		console.log("hello");
		setStep(newStep);
		setCategory(newTemplate);
		console.log(category);
	};

<<<<<<< HEAD
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
		console.log(
			storeName,
			title,
			thumbnail,
			message,
			btnContent,
			btnTextColor,
			btnBackGround
		);
	};
=======
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
>>>>>>> main

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
				{step === STEP.SETUP_AUTOMATION ? <SetupAutomation /> : null}
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
