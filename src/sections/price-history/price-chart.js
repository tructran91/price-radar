import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, Typography, alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    colors: ["#F04438", "#10B981"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        offsetY: 5,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
      },
    },
  };
};

export const PriceChart = (props) => {
  const { title, chartSeries } = props;
  const chartOptions = useChartOptions();

  return (
    <Card>
      <CardContent sx={{ padding: "10px 10px 0 10px !important" }}>
        <Typography variant="h6">{title}</Typography>
        <Chart height={270} options={chartOptions} series={chartSeries} type="line" width="100%" />
      </CardContent>
    </Card>
  );
};

PriceChart.protoTypes = {
  title: PropTypes.string,
  chartSeries: PropTypes.array.isRequired,
};
