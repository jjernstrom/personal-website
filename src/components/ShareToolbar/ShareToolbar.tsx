import { Stack, Typography, Link } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import SaveIcon from "@mui/icons-material/Save";

export const ShareToolbar = () => {
  return (
    <>
      <Stack direction="row" gap={2}>
        <Link color="#ebdbb2" display="flex">
          <Typography
            fontFamily="Courier"
            variant="caption"
            color="#ebdbb2"
            margin="auto"
          >
            Share
          </Typography>
          <IosShareIcon style={{ marginLeft: 4 }} />
        </Link>
        <Link underline="none" color="#ebdbb2" display="flex">
          <Typography
            fontFamily="Courier"
            variant="caption"
            color="#ebdbb2"
            margin="auto"
          >
            Save
          </Typography>
          <SaveIcon style={{ marginLeft: 4 }} />
        </Link>
      </Stack>
    </>
  );
};
