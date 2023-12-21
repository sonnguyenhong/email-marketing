import axios from "axios";
const emailTemplateClient = axios.create({
	baseURL: "http://192.168.15.1:51143/api",
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
