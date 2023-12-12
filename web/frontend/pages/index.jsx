import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

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

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Page>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <div style={{ marginTop: "12px", marginBottom: "24px" }}>
        <Layout>
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
