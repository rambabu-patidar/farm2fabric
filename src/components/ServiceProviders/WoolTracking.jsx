import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  "Shearing",
  "Scouring",
  "Dyeing",
  "Grading",
  "quality assessment",
  "Ready to sell",
];

const WoolTracking = ({ activeStep }) => {
  return (
    <div className="p-10 m-2 bg-green-100">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </div>
  );
};

export default WoolTracking;
