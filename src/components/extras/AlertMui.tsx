import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { CheckCircleOutline } from "@mui/icons-material";

export default function AlertMui(props: {
  title: string;
  description: string;
  openAlert: boolean;
  setOpenAlert: any;
  type: "success" | "error" | "info" | "warning";
  onClick?: any;
}) {
  return (
    <Box
      sx={{
        "@media (max-width: 320px)": {
          width: "100%",
          left: "0",
          bottom: "0",
          right: "0",
        },
        "@media (min-width: 768px)": {
          width: "538px",
          position: "fixed",
          bottom: "10px",
          right: "0",
        },
      }}
    >
      <Collapse in={props.openAlert}>
        <Alert
          onClick={() => {
            if (props.onClick) {
              console.log("Alert clicked");
              props.onClick();
            }
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={(e) => {
                e.stopPropagation(); // Detiene la propagación del evento
                props.setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          iconMapping={{
            success: <CheckCircleOutline fontSize="inherit" />,
          }}
          severity={props.type}
          sx={{ mb: 2 }}
        >
          {props.description}
        </Alert>
      </Collapse>
    </Box>
  );
}
