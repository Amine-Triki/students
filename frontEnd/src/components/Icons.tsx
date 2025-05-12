import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import type { AnimationProps } from 'framer-motion';
import { cloneElement } from 'react';
import type { ReactElement  , SVGProps} from 'react';


const MotionSpan = motion.span;

interface LinkItem {
    icon: ReactElement<SVGProps<SVGSVGElement>>;
  name: string;
}

interface IconsProps {
  links?: LinkItem[];
  animation?: AnimationProps['animate'];
}

const iconStyle: React.CSSProperties = {
  fontSize: 80,
  cursor: "pointer",
};

const Icons: React.FC<IconsProps> = ({
  links = [],
  animation = { scale: [1, 1.3, 1] },
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {links.map((item, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <MotionSpan
            style={{ display: "inline-block" }}
            animate={animation}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {cloneElement(item.icon, { style: iconStyle })}
          </MotionSpan>
          <p>{item.name}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Icons;
