import {
	Button,
	DataTable,
	DropZone,
	FormLayout,
	Layout,
	LegacyCard,
	LegacyStack,
	Modal,
	Select,
	Text,
	TextContainer,
	TextField,
	Thumbnail,
} from "@shopify/polaris";
import { useCallback, useState, useEffect } from "react";
import { getCountries, getCustomers, insertUserByFile } from "../../hooks/api";

const SelectCustomer = ({ onSelectUser }) => {
	const [files, setFiles] = useState([]);
	const [openFileDialog, setOpenFileDialog] = useState(false);
	const [users, setUsers] = useState([]);
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		getCustomers({ page: 1, itemsPerPage: 10 })
			.then((res) => {
				setUsers(res.data);
				setCurrentPage(res.pagination.current_page);
				setTotal(res.pagination.total);
				setTotalPage(res.pagination.total_pages);
				onSelectUser(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, [getCustomers]);
	useEffect(() => {
		getCountries()
			.then((res) => {
				setCountries(res);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [getCountries]);
	const handleDropZoneDrop = useCallback(
		(dropFiles, _acceptedFiles, _rejectedFiles) =>
			setFiles((files) => [...files, ...dropFiles]),
		[]
	);
	const toggleOpenFileDialog = useCallback(
		() => setOpenFileDialog((openFileDialog) => !openFileDialog),
		[]
	);

	const [activeImportModal, setActiveImportModal] = useState(false);
	const [activeEditModal, setActiveEditModal] = useState(false);
	const [activeDeleteModal, setActiveDeleteModal] = useState(false);

	const [ageFilter, setAgeFilter] = useState("");
	const [genderFilter, setGenderFilter] = useState("");
	const [regionFilter, setRegionFilter] = useState("");

	const ageOptions = [
		{ label: "Under 18", value: "0, 18" },
		{ label: "25 to 34", value: "25, 34" },
		{ label: "35 to 44", value: "35, 44" },
		{ label: "45 to 54", value: "45, 54" },
		{ label: "55 to 64", value: "55, 64" },
		{ label: "Above 65", value: "65" },
	];

	const genderOptions = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];

	const rows = users.map(
		({ customerName, email, country, phoneNumber, age }) => [
			customerName,
			age,
			email,
			phoneNumber,
			country,
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "8px",
				}}
			>
				<Button
					primary
					onClick={() => setActiveEditModal(true)}
				>
					Edit
				</Button>
				<Button
					destructive
					onClick={() => setActiveDeleteModal(true)}
				>
					Delete
				</Button>
			</div>,
		]
	);

	const handleCloseEditModal = () => {
		setActiveEditModal(false);
	};

	const handleCloseImportModal = () => {
		setActiveImportModal(false);
	};

	const handleCloseDeleteModal = () => {
		setActiveDeleteModal(false);
	};

	const handleOpenImportModal = () => {
		setActiveImportModal(true);
	};

	const handleOnChangeAgeFilter = (value) => {
		setAgeFilter(value);
	};

	const handleOnChangeGenderFilter = (value) => {
		setGenderFilter(value);
	};

	const handleOnChangeRegionFilter = (value) => {
		setRegionFilter(value);
	};

	const handlerImportUser = () => {
		insertUserByFile(files[0]).then(() => {
			getCustomers({ page: 1, itemsPerPage: 10 }).then((res) => {
				setUsers(res.data);
				setActiveImportModal(false);
			});
		});
	};

	const fileUpload = !files.length && <DropZone.FileUpload />;
	const uploadedFiles = files.length > 0 && (
		<LegacyStack vertical>
			{files.map((file, index) => (
				<LegacyStack
					alignment="center"
					key={index}
				>
					<Thumbnail
						size="small"
						alt={file.name}
						source={window.URL.createObjectURL(file)}
					/>
					<div>
						{file.name}{" "}
						<Text
							variant="bodySm"
							as="p"
						>
							{file.size} bytes
						</Text>
					</div>
				</LegacyStack>
			))}
		</LegacyStack>
	);

	return (
		<>
			{/* Modal Import  */}
			<Modal
				open={activeImportModal}
				onClose={handleCloseImportModal}
				title="Import customer"
				primaryAction={{
					content: "Import",
					onAction: () => handlerImportUser(),
				}}
				secondaryActions={[
					{
						content: "Close",
						onAction: handleCloseImportModal,
					},
				]}
			>
				<Modal.Section>
					<DropZone
						openFileDialog={openFileDialog}
						onDrop={handleDropZoneDrop}
						onFileDialogClose={toggleOpenFileDialog}
					>
						{uploadedFiles}
						{fileUpload}
					</DropZone>
				</Modal.Section>
			</Modal>

			{/* Edit modal  */}
			<Modal
				open={activeEditModal}
				onClose={handleCloseEditModal}
				title="Customer Detail"
				primaryAction={{
					content: "Save",
					onAction: handleCloseEditModal,
				}}
				secondaryActions={[
					{
						content: "Close",
						onAction: handleCloseEditModal,
					},
				]}
			>
				<Modal.Section>
					<FormLayout>
						<TextField
							label="Customer name"
							onChange={() => {}}
							autoComplete="off"
						/>
						<TextField
							label="Age"
							onChange={() => {}}
						/>
						<TextField
							label="Email"
							onChange={() => {}}
						/>
						<TextField
							label="Phone number"
							onChange={() => {}}
						/>
						<TextField
							label="Country"
							onChange={() => {}}
						/>
					</FormLayout>
				</Modal.Section>
			</Modal>

			{/* Delete modal  */}
			<Modal
				open={activeDeleteModal}
				onClose={handleCloseDeleteModal}
				title="Delete customer"
				primaryAction={{
					content: "Close",
					destructive: true,
					onAction: handleCloseDeleteModal,
				}}
				secondaryActions={[
					{
						content: "Save",
						onAction: handleCloseDeleteModal,
					},
				]}
			>
				<Modal.Section>
					<TextContainer>
						<p>Comfirm to delete customer</p>
					</TextContainer>
				</Modal.Section>
			</Modal>

			<Layout.Section>
				<div
					style={{
						display: "flex",
						justifyContent: "end",
						marginBottom: "16px",
					}}
				>
					<Button
						primary
						onClick={handleOpenImportModal}
					>
						Import customer
					</Button>
				</div>
				<div style={{ marginBottom: "16px" }}>
					<LegacyCard sectioned>
						<div style={{ display: "flex", gap: "16px" }}>
							<Select
								label={"Age"}
								options={ageOptions}
								onChange={handleOnChangeAgeFilter}
								value={ageFilter}
							/>
							<Select
								label={"Gender"}
								options={genderOptions}
								onChange={handleOnChangeGenderFilter}
								value={genderFilter}
							/>
							<Select
								label={"Region"}
								options={countries}
								onChange={handleOnChangeRegionFilter}
								value={regionFilter}
							/>
						</div>
					</LegacyCard>
				</div>
				<div>
					<LegacyCard sectioned>
						<DataTable
							columnContentTypes={[
								"text",
								"numeric",
								"text",
								"text",
								"country",
								"action",
							]}
							headings={[
								"Customer name",
								"Age",
								"Email",
								"Phone number",
								"Country",
								"Action",
							]}
							rows={rows}
							pagination={{
								hasNext: true,
								onNext: () => {},
							}}
						/>
					</LegacyCard>
				</div>
			</Layout.Section>
		</>
	);
};

export default SelectCustomer;
