import axios from "axios";
const emailTemplateClient = axios.create({
	baseURL: "https://65831be102f747c8367b1577.mockapi.io",
});

export async function getEmailTemplate(params) {
	try {
		const response = await emailTemplateClient.get("/email", {
			params: params,
		});
		return response.data;
	} catch (error) {
		console.error("Error posting file", error);
		throw error;
	}
}

export async function insertUserByFile(file) {
	const formData = new FormData();
	formData.append("file", file);

	try {
		const response = await emailTemplateClient.post("/import-users", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

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
