import {
  ColorPicker,
  DropZone,
  FormLayout,
  Label,
  Layout,
  LegacyCard,
  TextField,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

const EditEmailContent = () => {
  const [file, setFile] = useState();
  const [buttonTextColor, setButtonTextColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [buttonBgColor, setButtonBgColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(acceptedFiles[0]),
    []
  );
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const fileUpload = !file && <DropZone.FileUpload />;

  const uploadedFile = file && (
    <LegacyStack>
      <Thumbnail
        size="small"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : NoteMinor
        }
      />
      <div>
        {file.name}{" "}
        <Text variant="bodySm" as="p">
          {file.size} bytes
        </Text>
      </div>
    </LegacyStack>
  );

  return (
    <Layout.Section>
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%" }}>
          <LegacyCard sectioned>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "40px" }}>
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                  <p style={{ fontSize: "12px" }}>
                    Thanks for being subscribed for my store
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    No longer interested? Unsubscribed
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h1 style={{ fontSize: "28px" }}>HONGSONSTORE</h1>
                </div>
              </div>
              <div style={{ marginBottom: "40px" }}>
                <div style={{ textAlign: "center", marginBottom: "26px" }}>
                  <h2 style={{ fontSize: "20px" }}>Event coming soon</h2>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src="https://st.depositphotos.com/1024740/2316/i/450/depositphotos_23165868-stock-photo-business-cards-blank-mockup-template.jpg"
                  />
                </div>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <p style={{ fontSize: "16px" }}>
                    Our bestseller is back! Get yours before it's gone.
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      padding: "8px",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Shop now
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "12px" }}>
                    © 2023 HongSonStore. All rights reserved.
                  </p>
                  <p style={{ fontSize: "12px" }}>Vietnam</p>
                </div>
              </div>
            </div>
          </LegacyCard>
        </div>
        <div style={{ width: "100%" }}>
          <LegacyCard sectioned>
            <FormLayout>
              <TextField
                label="Store name"
                onChange={() => {}}
                autoComplete="off"
              />
              <TextField label="Title" onChange={() => {}} />
              <DropZone
                allowMultiple={false}
                onDrop={handleDropZoneDrop}
                label={"Image"}
              >
                {uploadedFile}
                {fileUpload}
              </DropZone>
              <TextField label="Message" onChange={() => {}} multiline={4} />
              <TextField label="Button content" onChange={() => {}} />
              <Label>Button text color</Label>
              <div style={{ width: "100%" }}>
                <ColorPicker
                  fullWidth
                  color={buttonTextColor}
                  onChange={setButtonTextColor}
                />
              </div>
              <Label>Button background color</Label>
              <div style={{ width: "100%" }}>
                <ColorPicker
                  fullWidth
                  color={buttonBgColor}
                  onChange={setButtonBgColor}
                />
              </div>
            </FormLayout>
          </LegacyCard>
        </div>
      </div>
    </Layout.Section>
  );
};

export default EditEmailContent;
