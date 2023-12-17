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
import { useCallback, useState } from "react";

const SelectCustomer = () => {
  const [files, setFiles] = useState([]);
  const [openFileDialog, setOpenFileDialog] = useState(false);

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

  const [ageFilter, setAgeFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");

  const ageOptions = [
    { label: "All", value: "All" },
    { label: "Under 18", value: "Under 18" },
    { label: "25 to 34", value: "25 to 34" },
    { label: "35 to 44", value: "35 to 44" },
    { label: "45 to 54", value: "45 to 54" },
    { label: "55 to 64", value: "55 to 64" },
    { label: "Above 65", value: "Above 65" },
  ];

  const genderOptions = [
    { label: "All", value: "All" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Option", value: "Option" },
  ];

  const regionOptions = [
    { label: "All", value: "All" },
    { label: "Europe", value: "Europe" },
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Asia" },
    { label: "Middle East", value: "Middle East" },
    { label: "Amaricas", value: "Amaricas" },
    { label: "South America", value: "South America" },
    { label: "Oceania", value: "Oceania" },
    { label: "Central America", value: "Central America" },
    { label: "Australia", value: "Australia" },
    { label: "The Caribbean", value: "The Caribbean" },
  ];

  const rows = [
    [
      "Nguyen Hong Son 1",
      18,
      "sonnguyenhong111@gmail.com",
      "0987654321",
      "Vietnam",
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button primary onClick={() => setActiveEditModal(true)}>
          Edit
        </Button>
        <Button destructive onClick={() => setActiveDeleteModal(true)}>
          Delete
        </Button>
      </div>,
    ],
    [
      "Nguyen Hong Son 2",
      32,
      "sonnguyenhong12333@gmail.com",
      "0987654321",
      "Vietnam",
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button primary>Edit</Button>
        <Button destructive>Delete</Button>
      </div>,
    ],
    [
      "Nguyen Hong Son 3",
      14,
      "sonnguyenhong123@gmail.com",
      "0987654321",
      "Vietnam",
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button primary>Edit</Button>
        <Button destructive>Delete</Button>
      </div>,
    ],
  ];

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

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <LegacyStack vertical>
      {files.map((file, index) => (
        <LegacyStack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <div>
            {file.name}{" "}
            <Text variant="bodySm" as="p">
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
          onAction: handleCloseImportModal,
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
            <TextField label="Age" onChange={() => {}} />
            <TextField label="Email" onChange={() => {}} />
            <TextField label="Phone number" onChange={() => {}} />
            <TextField label="Country" onChange={() => {}} />
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
          <Button primary onClick={handleOpenImportModal}>
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
                options={regionOptions}
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
