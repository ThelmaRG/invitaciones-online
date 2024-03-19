import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import CircleButton from "./CircleButton";
import useIsMobileView from "@/hooks/useIsMobileView";

const GroupButtons: FunctionComponent = () => {
    const isMobileView = useIsMobileView();
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBlock: isMobileView ? '10px' :'20px'
        }}>
            <CircleButton icon="church" text="Ceremonia" href="https://www.google.com/maps/place/Parroquia+de+la+Asunci%C3%B3n+de+Mar%C3%ADa/@19.147853,-99.5837604,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd8d73aaaaaaab:0x601cb55e26a2d603!8m2!3d19.147848!4d-99.5811855!16s%2Fg%2F11b781bcs6?entry=ttu" />
            <CircleButton icon="location" text="Jardín Xoly" href="https://www.google.com/maps/place/Salon+Jardin+Xoly/@19.1166333,-99.5934522,17z/data=!3m1!4b1!4m6!3m5!1s0x85cd936593574e5b:0x93d1714bf8732435!8m2!3d19.1166283!4d-99.5885813!16s%2Fg%2F11jn0qv269?entry=ttu" />
            <CircleButton icon="whatsapp" text="Confirmar asistencia" href=" https://wa.me/17227832298" />
            <CircleButton icon="gift" text="Mesa de regalos" href="https://www.amazon.com.mx/registries/gl/guest-view/1818PUWHY4YZ5" />
        </Box>
    );
}

export default GroupButtons;