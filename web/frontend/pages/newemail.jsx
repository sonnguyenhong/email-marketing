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

export default function NewEmail() {
  const { t } = useTranslation();
  return (
    <Page>
      <TitleBar title="Email Automation" primaryAction={null} />
      <Layout>
        <Layout.Section className="abc">
          <ul className="progressbar">
            <li className="active">Select email type</li>
            <li>Edit email content</li>
            <li>Select customers</li>
            <li>Setup automation</li>
          </ul>
        </Layout.Section>
        <Layout.Section>
          <Text variant="headingMd" as="h6">
            Subscriber activity
          </Text>
        </Layout.Section>
        <Layout.Section>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
        <Layout.Section>
          <Text variant="headingMd" as="h6">
            Commerce activity
          </Text>
        </Layout.Section>
        <Layout.Section>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
              <LegacyCard sectioned>
                <p>Comming soon</p>
                <img
                  alt="Black choker necklace"
                  src="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                  style={{ width: "100%", height: "300px" }}
                />
                <div className="div-btn">
                  <Button>Add product</Button>
                </div>
              </LegacyCard>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
