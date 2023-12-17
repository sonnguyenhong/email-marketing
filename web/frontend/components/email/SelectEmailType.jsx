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
import "../../style/app.css";

const SelectEmailType = () => {
  return (
    <div>
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
                <Button>Select</Button>
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
                <Button>Select</Button>
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
                <Button>Select</Button>
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
                <Button>Select</Button>
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
                <Button>Select</Button>
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
                <Button>Select</Button>
              </div>
            </LegacyCard>
          </Grid.Cell>
        </Grid>
      </Layout.Section>
    </div>
  );
};

export default SelectEmailType;
