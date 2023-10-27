import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
    console.log(expanded);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque culpa
          nulla dolor accusantium sit in tempore officia quibusdam quo
          reprehenderit, voluptates voluptatibus voluptatem iste, illum sint sed
          nihil quidem possimus.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque culpa
          nulla dolor accusantium sit in tempore officia quibusdam quo
          reprehenderit, voluptates voluptatibus voluptatem iste, illum sint sed
          nihil quidem possimus.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel1-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque culpa
          nulla dolor accusantium sit in tempore officia quibusdam quo
          reprehenderit, voluptates voluptatibus voluptatem iste, illum sint sed
          nihil quidem possimus.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque culpa
          nulla dolor accusantium sit in tempore officia quibusdam quo
          reprehenderit, voluptates voluptatibus voluptatem iste, illum sint sed
          nihil quidem possimus.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
