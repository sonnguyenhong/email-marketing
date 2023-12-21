import axios from "axios";
const emailTemplateClient = axios.create({
	baseURL: "https://6cf8-1-53-36-160.ngrok-free.app/api",
	headers: {
		"ngrok-skip-browser-warning": "69420",
	},
});

export async function getEmailTemplate(params) {
	try {
		const response = await emailTemplateClient.get("/template-mail", {
			params: params,
		});
		return response.data.data;
	} catch (error) {
		console.error("Error posting file", error);
		throw error;
	}
}

export async function getCustomers(params) {
	try {
		const response = await emailTemplateClient.get("/customer", {
			params: params,
		});
		return response.data.data;
	} catch (error) {
		console.error("Error posting file", error);
		throw error;
	}
}

export async function getCountries() {
	try {
		const response = await emailTemplateClient.get("/customer/country");
		return response.data.data;
	} catch (error) {
		console.error("Error posting file", error);
		throw error;
	}
}
export async function insertUserByFile(file) {
	const formData = new FormData();
	formData.append("file", file);

	try {
		const response = await emailTemplateClient.post(
			"/customer/import",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("Error when insert users", error);
		throw error;
	}
}

export async function addNewUser(newUser) {
	try {
		const response = await emailTemplateClient.post("/new-user", newUser, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error when create new user:", error);
		throw error;
	}
}
export async function saveEmailSchedule(data) {
	try {
		const response = await emailTemplateClient.post(
			"/template-mail/store",
			data,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("Error when create new user:", error);
		throw error;
	}
}
