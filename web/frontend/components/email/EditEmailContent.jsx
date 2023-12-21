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
import { useCallback, useState, useEffect } from "react";
import "../../style/app.css";
import tinycolor from "tinycolor2";

const EditEmailContent = ({ category, setInfoMail }) => {
  let [storeName, setStoreName] = useState("HONGSONSTORE");
  let [title, setTitle] = useState();
  let [message, setMessage] = useState();
  let [btnContent, setBtnContent] = useState();
  let [file, setFile] = useState();
  let [buttonTextColorRGB, setButtonTextColorRGB] =
    useState("rgb(256,256,256)");
  let [buttonBgColorRGB, setButtonBgColorRGB] = useState("rgb(0,0,0)");
  let [buttonTextColor, setButtonTextColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 1,
  });
  const [buttonBgColor, setButtonBgColor] = useState({
    hue: 0,
    brightness: 0,
    saturation: 0,
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
        buttonTextColorRGB,
        buttonBgColorRGB
      );
      toggleActive();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeTextColorBtn = (value) => {
    console.log(value);
    setButtonTextColor(value);
    const rgbColor = tinycolor({
      h: value.hue,
      s: value.saturation,
      v: value.brightness,
    }).toRgb();
    setButtonTextColorRGB(`rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`);
    console.log(buttonTextColorRGB);
  };

  const onChangeBgColorBtn = (value) => {
    console.log(value);
    setButtonBgColor(value);
    const rgbColor = tinycolor({
      h: value.hue,
      s: value.saturation,
      v: value.brightness,
    }).toRgb();
    setButtonBgColorRGB(`rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`);
  };

  useEffect(() => {
    if (category === "EventComming") {
      setTitle("Event coming soon");
      setMessage("Our bestseller is back! Get yours before it's gone.");
      setBtnContent("Shop now");
    } else if (category === "GiftGuide") {
      setTitle("The Gift Guide");
      setMessage(
        "We've rounded up our favorite gifts to help you celebrate your loved ones this holiday season."
      );
      setBtnContent("Shop now to get your gift on time");
    } else if (category === "reminder") {
      setTitle("Last-minute gifts");
      setMessage("There's still time to get them something special!");
      setBtnContent("Shop now");
    } else if (category === "blog") {
      setTitle("Your post's title");
      setMessage("Summary of the post that appears on your home page or blog.");
      setBtnContent("Read more");
    }
  }, []);

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
                        <h1 style={{ fontSize: "28px" }}>{storeName}</h1>
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "20px" }}>{title}</h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        {file === undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src="../../assets/empty.png"
                          />
                        ) : null}
                        {file !== undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src={
                              validImageTypes.includes(file.type)
                                ? window.URL.createObjectURL(file)
                                : NoteMinor
                            }
                          />
                        ) : null}
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>{message}</p>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          style={{
                            padding: "8px",
                            backgroundColor: `${buttonBgColorRGB}`,
                            color: `${buttonTextColorRGB}`,
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          {btnContent}
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
                        <h1 style={{ fontSize: "28px" }}>{storeName}</h1>
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
                        {btnContent}
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
                          {title}
                        </h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        {file === undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src="../../assets/empty.png"
                          />
                        ) : null}
                        {file !== undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src={
                              validImageTypes.includes(file.type)
                                ? window.URL.createObjectURL(file)
                                : NoteMinor
                            }
                          />
                        ) : null}
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>{message}</p>
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
                        <h1 style={{ fontSize: "28px" }}>{storeName}</h1>
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
                        <p>your gifts before the shipping cutoff</p>
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div style={{ marginBottom: "20px" }}>
                        {file === undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src="../../assets/empty.png"
                          />
                        ) : null}
                        {file !== undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src={
                              validImageTypes.includes(file.type)
                                ? window.URL.createObjectURL(file)
                                : NoteMinor
                            }
                          />
                        ) : null}
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "10px" }}
                      >
                        <h2 style={{ fontSize: "26px", fontWeight: "bold" }}>
                          {title}
                        </h2>
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <p style={{ fontSize: "16px" }}>{message}</p>
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
                          {btnContent}
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
                        <h1 style={{ fontSize: "28px" }}>{storeName}</h1>
                      </div>
                    </div>
                    <div style={{ marginBottom: "40px" }}>
                      <div
                        style={{ textAlign: "center", marginBottom: "26px" }}
                      >
                        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                          New on the blog.
                        </h2>
                      </div>
                      <div style={{ marginBottom: "20px" }}>
                        {file === undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src="../../assets/empty.png"
                          />
                        ) : null}
                        {file !== undefined ? (
                          <img
                            style={{ borderRadius: "10px", width: "600px" }}
                            src={
                              validImageTypes.includes(file.type)
                                ? window.URL.createObjectURL(file)
                                : NoteMinor
                            }
                          />
                        ) : null}
                      </div>
                      <div
                        style={{ textAlign: "center", marginBottom: "20px" }}
                      >
                        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {title}
                        </h2>
                        <p style={{ fontSize: "16px" }}>{message}</p>
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
                          {btnContent}
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
                    onChange={(value) => onChangeTextColorBtn(value)}
                  />
                </div>
                <Label>Button background color</Label>
                <div style={{ width: "100%" }}>
                  <ColorPicker
                    fullWidth
                    color={buttonBgColor}
                    onChange={(value) => onChangeBgColorBtn(value)}
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
