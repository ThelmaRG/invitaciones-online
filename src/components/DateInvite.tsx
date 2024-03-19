
import { FunctionComponent } from "react";
import useIsMobileView from "@/hooks/useIsMobileView";
import { colors } from "@/utils/colors";
import { panamera } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";

const DateInvite: FunctionComponent = () => {
    const isMobileView = useIsMobileView();
    return (
        <Box flexDirection={'row'} display={'flex'} alignItems={'center'} sx={{ marginTop: isMobileView ? '8px' : '16px', marginBottom: isMobileView ? '4px' :'8px' }}>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{
                paddingBlock: isMobileView ? '10px' : '24px',
                paddingInline: '12px',
                borderImage: 'linear-gradient(125deg, rgba(119,135,147,1) 0%, rgba(215,217,218,1) 33%, rgba(119,135,147,1) 100%)',
                borderImageSlice: 1,
                borderBlockWidth: '2.5px',
                borderInlineWidth: '0px',
                borderStyle: 'solid'

            }}>
                <Typography
                    className={panamera.className}
                    sx={{
                        fontSize: isMobileView ? '18px' : '32px',
                        color: colors.secondary
                    }}>
                    SÁBADO</Typography>
            </Box>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{ paddingInline: '12px' }}>
                <Typography
                    className={panamera.className}
                    sx={{
                        fontSize: isMobileView ? '16px' : '32px',
                        backgroundcolor: "primary",
                        backgroundImage: 'linear-gradient(90deg, rgba(119,135,147,1) 0%, rgba(215,217,218,1) 48%, rgba(119,135,147,1) 100%)',
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                    Abril
                </Typography>
                <Typography className={panamera.className} sx={{ fontSize: isMobileView ? '40px' : '64px', color: colors.primary }}>20</Typography>
            </Box>
            <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{
                paddingBlock: isMobileView ? '10px' : '24px',
                paddingInline: '12px',
                borderImage: 'linear-gradient(125deg, rgba(119,135,147,1) 0%, rgba(215,217,218,1) 33%, rgba(119,135,147,1) 100%)',
                borderImageSlice: 1,
                borderBlockWidth: '2.5px',
                borderInlineWidth: '0px',
                borderStyle: 'solid'
            }}>
                <Typography className={panamera.className} sx={{ fontSize: isMobileView ? '18px' : '32px', color: colors.secondary }}>2:00 PM</Typography>
            </Box>

        </Box>
    );
}

export default DateInvite;