import {
  ColorPicker,
  DropZone,
  FormLayout,
  Label,
  Layout,
  LegacyCard,
  TextField,
  LegacyStack,
  Thumbnail,
  Text,
  Button,
  Toast,
  Frame,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import "../../style/app.css";

const EditEmailContent = ({ category, setInfoMail }) => {
  let [storeName, setStoreName] = useState();
  let [title, setTitle] = useState();
  let [message, setMessage] = useState();
  let [btnContent, setBtnContent] = useState();
  let [file, setFile] = useState();
  let [buttonTextColor, setButtonTextColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [buttonBgColor, setButtonBgColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Save success" onDismiss={toggleActive} />
  ) : null;

  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(acceptedFiles[0]),
    []
  );
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const fileUpload = !file && <DropZone.FileUpload />;

  const uploadedFile = file && (
    <LegacyStack>
      <Thumbnail
        size="medium"
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

  const saveInfoMail = () => {
    try {
      setInfoMail(
        storeName,
        title,
        file,
        message,
        btnContent,
        buttonTextColor,
        buttonBgColor
      );
      toggleActive();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Frame>
      <Layout.Section>
        <div className="toastSuccess">{toastMarkup}</div>
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
                {category === "EventComming" ? (
                  <div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ marginBottom: "20px", textAlign: "center" }}
                      >
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
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "20px" }}>Event coming soon</h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src="https://st.depositphotos.com/1024740/2316/i/450/depositphotos_23165868-stock-photo-business-cards-blank-mockup-template.jpg"
                        />
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>
                          Our bestseller is back! Get yours before it's gone.
                        </p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                ) : null}
                {category === "GiftGuide" ? (
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{ marginBottom: "20px", textAlign: "center" }}
                      >
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          padding: "24px",
                          backgroundColor: "black",
                          color: "white",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "20px",
                        }}
                      >
                        Shop now to get your gift on time
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
                          The Gift Guide
                        </h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src="https://st.depositphotos.com/1024740/2316/i/450/depositphotos_23165868-stock-photo-business-cards-blank-mockup-template.jpg"
                        />
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>
                          We've rounded up our favorite gifts to help you
                          celebrate your loved ones this holiday season.
                        </p>
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
                ) : null}
                {category === "reminder" ? (
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{ marginBottom: "20px", textAlign: "center" }}
                      >
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          padding: "24px",
                          backgroundColor: "black",
                          color: "white",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "center",
                          fontSize: "18px",
                        }}
                      >
                        <p>The countdown is on! Shop now to get</p>
                        <p>your gifts before the shipping cutoff ›</p>
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div style={{ marginBottom: "20px" }}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src="https://st.depositphotos.com/1024740/2316/i/450/depositphotos_23165868-stock-photo-business-cards-blank-mockup-template.jpg"
                        />
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "10px" }}
                      >
                        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
                          Last-minute gifts
                        </h2>
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>
                          There's still time to get them something special!
                        </p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
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
                ) : null}
                {category === "blog" ? (
                  <div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ marginBottom: "20px", textAlign: "center" }}
                      >
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
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>New on the blog.</h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src="https://st.depositphotos.com/1024740/2316/i/450/depositphotos_23165868-stock-photo-business-cards-blank-mockup-template.jpg"
                        />
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Your post's title</h2>
                        <p style={{ fontSize: "16px" }}>
                          Summary of the post that appears on your home page or
                          blog.
                        </p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          style={{
                            padding: "8px",
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Read more
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
                ) : null}
              </div>
            </LegacyCard>
          </div>
          <div style={{ width: "100%" }}>
            <LegacyCard sectioned>
              <FormLayout>
                <TextField
                  value={storeName}
                  label="Store name"
                  onChange={(value) => {
                    storeName = setStoreName(value);
                  }}
                  autoComplete="off"
                />
                <TextField
                  value={title}
                  label="Title"
                  onChange={(value) => {
                    title = setTitle(value);
                  }}
                />
                <DropZone
                  allowMultiple={false}
                  onDrop={handleDropZoneDrop}
                  label={"Image"}
                >
                  {uploadedFile}
                  {fileUpload}
                </DropZone>
                <TextField
                  value={message}
                  label="Message"
                  onChange={(value) => {
                    message = setMessage(value);
                  }}
                  multiline={4}
                />
                <TextField
                  value={btnContent}
                  label="Button content"
                  onChange={(value) => {
                    btnContent = setBtnContent(value);
                  }}
                />
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
                <Button onClick={saveInfoMail}>Save</Button>
              </FormLayout>
            </LegacyCard>
          </div>
        </div>
      </Layout.Section>
    </Frame>
  );
};

export default EditEmailContent;
