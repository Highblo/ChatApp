import { Box } from "@mui/material";

export const Balloon = (props) => {

  const { backgroundColor, txs, bxs, tsm, bsm, mxs, msm, left, right, animationDelay, children } = props;


  return (
    <Box sx={{
      position: "absolute",
      top: {xs: txs, sm: tsm},
      bottom: { xs: bxs, sm: bsm },
      left,
      right,
      backgroundColor,
      display: { xs: mxs, sm: msm },
      color: "#fff",
      width: "150px",
      height: "150px",
      lineHeight: "150px",
      padding: { xs: "4px", sm: "16px", md: "24px" },
      fontSize: "1.5rem",
      textAlign: "center",
      borderRadius: "5px 85px 85px",
      zIndex: "-1",
      animation: "animate 4.5s linear infinite",
      animationDelay,
    }}>{children}</Box>
  );
};