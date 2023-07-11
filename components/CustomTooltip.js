import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

function CustomTooltip({ values }) {
  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 820,
      fontSize: 16,
      border: "1px solid #dadde9",
    },
  }));

  return (
    <MyTooltip
      placement="top"
      title={
        <div>
          {values?.map((value, index) => {
            return (
              <div key={index} style={{ padding: "5px 15px", display: "flex" }}>
                <p style={{ width: "150px" }}>{value.type}</p>
                <p style={{ width: "500px" }}>{value.value}</p>
              </div>
            );
          })}
        </div>
      }
    >
      <HelpIcon
        sx={{
          fontSize: "16px",
        }}
      />
    </MyTooltip>
  );
}

export default CustomTooltip;
