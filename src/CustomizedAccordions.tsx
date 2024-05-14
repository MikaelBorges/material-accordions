import * as React from "react";
import { styled } from "@mui/material/styles";
//import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import DenseTable from "./DenseTable";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    //expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [limited, setLimited] = React.useState<boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setLimited(newExpanded && expanded ? true : false);
      setExpanded(newExpanded ? panel : false);
    };

  const createDataCoords = (lat: number, lng: number, alt: number) => {
    return { lat, lng, alt };
  };

  const createDataDistances = (twoDim: number, threeDim: number) => {
    return { "2D (m)": twoDim, "3D (m)": threeDim };
  };

  const rowsCoords = [
    createDataCoords(1.0, 24, 4.0),
    createDataCoords(2.0, 37, 4.3),
    createDataCoords(3.0, 24, 6.0),
    createDataCoords(4.7, 67, 4.3),
    createDataCoords(5.0, 49, 3.9),
    createDataCoords(6.0, 24, 4.0),
    createDataCoords(7.0, 37, 4.3),
    createDataCoords(8.0, 24, 6.0),
    createDataCoords(9.7, 67, 4.3),
    createDataCoords(10.0, 49, 3.9),
    createDataCoords(11.0, 24, 4.0),
    createDataCoords(12.0, 37, 4.3),
    createDataCoords(13.0, 24, 6.0),
    createDataCoords(14.7, 67, 4.3),
    createDataCoords(15.0, 49, 3.9),
    createDataCoords(16.0, 24, 4.0),
    createDataCoords(17.0, 37, 4.3),
    createDataCoords(18.0, 24, 6.0),
    createDataCoords(19.7, 67, 4.3),
    createDataCoords(20.0, 49, 3.9),
    createDataCoords(21.0, 24, 4.0),
    createDataCoords(22.0, 37, 4.3),
    createDataCoords(23.0, 24, 6.0),
    createDataCoords(24.7, 67, 4.3),
    createDataCoords(25.0, 49, 3.9),
  ];

  const rowsDistances = [
    createDataDistances(1.0, 24),
    createDataDistances(2.0, 37),
    createDataDistances(3.0, 24),
    createDataDistances(4.7, 67),
    createDataDistances(5.0, 49),
    createDataDistances(6.0, 24),
    createDataDistances(7.0, 37),
    createDataDistances(8.0, 24),
    createDataDistances(9.7, 67),
    createDataDistances(10.0, 49),
    createDataDistances(11.0, 24),
    createDataDistances(12.0, 37),
    createDataDistances(13.0, 24),
    createDataDistances(14.7, 67),
    createDataDistances(15.0, 49),
    createDataDistances(16.0, 24),
    createDataDistances(17.0, 37),
    createDataDistances(18.0, 24),
    createDataDistances(19.7, 67),
    createDataDistances(20.0, 49),
    createDataDistances(21.0, 24),
    createDataDistances(22.0, 37),
    createDataDistances(23.0, 24),
    createDataDistances(24.7, 67),
    createDataDistances(25.0, 49),
  ];

  const accordionsData = [
    {
      summary: "Collapsible Group Item #1",
      details: <Typography>Lorem ipsum 1.</Typography>,
    },
    {
      summary: "Collapsible Group Item #2",
      details: <Typography>Lorem ipsum 2.</Typography>,
    },
    {
      summary: "Collapsible Group Item #3",
      details: (
        <DenseTable tableHead={["lat", "lng", "alt"]} rows={rowsCoords} />
      ),
    },
    {
      summary: "Collapsible Group Item #4",
      details: (
        <DenseTable tableHead={["2D (m)", "3D (m)"]} rows={rowsDistances} />
      ),
    },
  ];

  return (
    <div>
      {accordionsData.map((accordion) => (
        <Accordion
          onChange={handleChange(accordion.summary)}
          key={accordion.summary}
        >
          <AccordionSummary
            aria-controls={accordion.summary}
            id={accordion.summary}
          >
            <Typography>{accordion.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails
          /* sx={{
              maxHeight: limited ? 300 : "auto",
              overflow: "scroll",
            }} */
          >
            {accordion.details}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
