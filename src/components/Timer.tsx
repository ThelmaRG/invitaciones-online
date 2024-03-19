"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import useIsMobileView from "@/hooks/useIsMobileView";
import { colors } from "@/utils/colors";
import { executive, school } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";


const Timer: FunctionComponent = () => {

    const isMobileView = useIsMobileView();

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = '20 Apr 2024 14:00:00 GMT-6';

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <Box flexDirection={'column'} display={'flex'} alignItems={'center'} >
            <Typography className={school.className} sx={{ fontSize: isMobileView ? '18px' : '32px', color: colors.primary }}>faltan</Typography>
            <Box flexDirection={'row'} display={'flex'}>
                <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{ paddingInline: '8px' }}>
                    <Typography className={school.className} sx={{ fontSize: '56px', color: colors.secondary }}>{days}</Typography>
                    <Typography className={school.className} sx={{ fontSize: isMobileView ? '14px' : '22px', color: colors.primary }}>días</Typography>
                </Box>
                <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{ paddingInline: '8px' }}>
                    <Typography className={school.className} sx={{ fontSize: '56px', color: colors.secondary }}>{hours}</Typography>
                    <Typography className={school.className} sx={{ fontSize: isMobileView ? '14px' : '22px', color: colors.primary }}>horas</Typography>
                </Box>
                <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{ paddingInline: '8px' }}>
                    <Typography className={school.className} sx={{ fontSize: '56px', color: colors.secondary }}>{minutes}</Typography>
                    <Typography className={school.className} sx={{ fontSize: isMobileView ? '14px' : '22px', color: colors.primary }}>minutos</Typography>
                </Box>
                <Box flexDirection={'column'} display={'flex'} alignItems={'center'} sx={{ paddingInline: '8px' }}>
                    <Typography className={school.className} sx={{ fontSize: '56px', color: colors.secondary }}>{seconds}</Typography>
                    <Typography className={school.className} sx={{ fontSize: isMobileView ? '14px' : '22px', color: colors.primary }}>segundos</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Timer;