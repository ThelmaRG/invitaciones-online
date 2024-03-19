import { colors } from "@/utils/colors";
import { Box, Button, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Icon from "./Icon";
import { school } from "@/utils/fonts";
import useIsMobileView from "@/hooks/useIsMobileView";

interface CircleButtonProps {
    icon: string;
    text: string;
    href: string;
}

const CircleButton: FunctionComponent<CircleButtonProps> = ({ icon, text, href }) => {
    const isMobileView = useIsMobileView();
    return (
        <Button
            href={href}
            target="_blank"
            sx={{
                marginInline: isMobileView ? '4px' : '16px'
            }} >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    display: 'flex',
                    borderRadius: 100,
                    width: isMobileView ? '10vw' : '3.61vw',
                    height: isMobileView ? '10vw' : '3.61vw',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `1.5px solid ${colors.secondary}`,
                    marginBottom: '8px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        backgroundColor: colors.third,
                        borderRadius: 100,
                        width: isMobileView ? '9vw' : '3.25vw',
                        height: isMobileView ? '9vw' : '3.25vw',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon icon={icon} size={isMobileView ? 24 : 36} />
                    </Box>
                </Box>
                <Typography className={school.className} sx={{ fontSize: isMobileView ? '16px' : '20px', color: colors.primary, textAlign: 'center' }}>{text}</Typography>
            </Box>

        </Button>
    );
}

export default CircleButton;