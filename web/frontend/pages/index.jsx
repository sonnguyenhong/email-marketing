import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Grid,
  LegacyCard,
  Select,
  DatePicker,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { useCallback, useState } from "react";
import "../style/app.css";
import { CalendarMinor, ResetMinor } from "@shopify/polaris-icons";

Chart.register(CategoryScale);

// utils/Data.js
export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
const labels = ["1", "2", "3", "4", "5", "6", "7"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [45, 54, 77, 63, 65, 88, 92],
    },
  ],
};

const performanceData = {
  labels: labels,
  datasets: [
    {
      label: "Open rate",
      data: [11, 9, 12, 12, 14, 16, 20],
    },
    {
      label: "Click rate",
      data: [4, 8, 9, 10, 11, 8, 9],
    },
    {
      label: "Conversion rate",
      data: [5, 7, 2, 8, 9, 2, 5],
    },
  ],
};

const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 days", value: "lastWeek" },
];

export default function HomePage() {
  const { t } = useTranslation();

  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  return (
    <Page>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <div style={{ marginTop: "12px", marginBottom: "24px" }}>
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned>
              <h2 style={{ fontWeight: 600 }}>Overall analytics</h2>
              <div style={{ width: "60%", marginTop: "10px" }}>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
                    <Select
                      options={options}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 3, sm: 2, md: 2, lg: 4, xl: 4 }}>
                    <Button icon={CalendarMinor}>Custom Period</Button>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 3, xl: 3 }}>
                    <Button icon={ResetMinor}>Reset</Button>
                  </Grid.Cell>
                </Grid>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div style={{ height: "60px" }}>
                        <Text variant="bodyMd" as="p">
                          Revanue
                        </Text>
                        <p className="data-detail">đ 127,542,000</p>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div style={{ height: "60px" }}>
                        <Text variant="bodyMd" as="p">
                          Unsubcribes
                        </Text>
                        <p className="data-detail">12</p>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 2, md: 2, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div style={{ height: "60px" }}>
                        <Text variant="bodyMd" as="p">
                          Suppression
                        </Text>
                        <p className="data-detail">3%</p>
                        <p>5 Bounced | 2 Complained</p>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                </Grid>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <LegacyCard sectioned>
                      <div>
                        <Text variant="bodyMd" as="p">
                          Email sent
                        </Text>
                        <p className="data-detail">87</p>
                        <div className="cover-detail">
                          <div className="detail1">
                            <p>Opened (55)</p>
                            <p className="data-detail">63,22%</p>
                          </div>
                          <div className="detail2">
                            <p>Clicked (42)</p>
                            <p className="data-detail">59,77%</p>
                          </div>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <LegacyCard sectioned>
                      <div>
                        <Text variant="bodyMd" as="p">
                          SMS sent
                        </Text>
                        <p className="data-detail">51</p>
                        <div className="cover-detail">
                          <div className="detail1">
                            <p>Clicked (21)</p>
                            <p className="data-detail">41,18%</p>
                          </div>
                          <div className="detail2">
                            <p>Delivered (19)</p>
                            <p className="data-detail">37,25%</p>
                          </div>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                </Grid>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Grid>
                  <Grid.Cell
                    columnSpan={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 12 }}
                  >
                    <LegacyCard sectioned>
                      <div>
                        <Text variant="bodyMd" as="p">
                          WhatsApp sent
                        </Text>
                        <p className="data-detail">121</p>
                        <div className="cover-detail">
                          <div className="detail1">
                            <p>Read (89)</p>
                            <p className="data-detail">73,55%</p>
                          </div>
                          <div className="detail2">
                            <p>Clicked (74)</p>
                            <p className="data-detail">61,16%</p>
                          </div>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                </Grid>
              </div>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
              <p style={{ fontWeight: 600 }}>Sales from Email Marketing</p>
              <p>Total revenue this month: 160$</p>
              <Line
                data={data}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Sales from Email Marketing",
                    },
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card sectioned>
              <p style={{ fontWeight: 600 }}>
                Email Automation performance this month
              </p>
              <Line
                data={performanceData}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Email Automation performance this month",
                    },
                    legend: {
                      display: true,
                    },
                  },
                }}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
}
