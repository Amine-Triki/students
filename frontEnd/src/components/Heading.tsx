import {Box , Typography} from "@mui/material";
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'
// Define the props interface
interface HeadingProps {
  title: string;
  subTitle: string;
}

const heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <Box textAlign="center" my={8}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {title}
      </Typography>
      <LineWobble
  size="80"
  stroke="5"
  bgOpacity="0.1"
  speed="1.75"
  color="black" 
/>
      <Typography variant="subtitle1" color="textSecondary">
        {subTitle}
      </Typography>
    </Box>
  );
};

export default heading;




