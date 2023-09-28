import React from "react";
import {
	Box,
	Button,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from "@mui/material";

const steps = [
	"Shearing",
	"Scouring",
	"Grading",
	"Dyeing",
	"quality assessment",
	"tranportation",
	"Sold!😊",
];

const WoolTracking = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};
	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className="p-24 m-28 bg-green-200">
			<Box sx={{ width: "100%" }}>
				<Stepper activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						//   if (isStepOptional(index)) {
						//   labelProps.optional = (
						//       <Typography variant="caption">Optional</Typography>
						//   );
						//   }
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>
							Your Wool has been delivered successfully
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
							<Box sx={{ flex: "1 1 auto" }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						{/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
						<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
							{/* <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                  >
                      Back
                  </Button> */}
							<Box sx={{ flex: "1 1 auto" }} />
							{isStepOptional(activeStep) && (
								<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
									Skip
								</Button>
							)}

							{/* <Button onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button> */}
						</Box>
					</React.Fragment>
				)}
			</Box>
		</div>
	);
};

export default WoolTracking;
