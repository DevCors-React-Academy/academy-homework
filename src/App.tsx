import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";

const App: FC = () => {
  return (
    <StyledBox>
      <Typography variant="h2">Task Manager</Typography>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  background-color: #eee;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export default App;
