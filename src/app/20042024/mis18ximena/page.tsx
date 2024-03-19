"use client"
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import desktop from '../../../../public/assets/images/desktop/desktop.png';
import mobile from '../../../../public/assets/images/mobile/mobile.png';
import GroupButtons from "@/components/GroupButtons";
import eighteendesktop from '../../../../public/assets/images/desktop/18-desktop.png';
import eighteenmobile from '../../../../public/assets/images/mobile/18-mobile.png';

import upDesktop from '../../../../public/assets/images/desktop/up-desktop.png';
import downDesktop from '../../../../public/assets/images/desktop/down-desktop.png';

import upMobile from '../../../../public/assets/images/mobile/up-mobile.png';
import downMobile from '../../../../public/assets/images/mobile/down-mobile.png';

import { colors } from "@/utils/colors";
import Timer from "@/components/Timer";
import DateInvite from "@/components/DateInvite";
import { marigold, school } from "@/utils/fonts";
import useIsMobileView from "@/hooks/useIsMobileView";
import Head from "next/head";

export default function Home() {
    const isMobileView = useIsMobileView();
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href='../../../../public/assets/images/web-icon.png' />
            </Head>

            <Box
                className="index-header text-center"
                sx={{
                    position: 'relative',
                    height: '98vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }
                }}
            >
                <Image
                    fill
                    src={isMobileView ? mobile : desktop}
                    alt="Image alt"
                    style={{ objectFit: "cover" }}
                />
                <Box
                    display={'flex'}
                    flex={1}
                    sx={{ zIndex: 2, width: '90%', height: '100%' }}
                >
                    <Grid container display={'flex'} flex={1}>
                        <Grid display={'flex'} flex={1} item md={7} xs={12} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                            {isMobileView &&
                                <Grid item xs={12} >
                                    <Image
                                        src={upMobile}
                                        alt="Image alt"
                                        style={{ objectFit: "contain", width: '91.11vw', height: '10.20vh', marginTop: '16px' }}
                                    />
                                </Grid>}
                            <Image
                                src={isMobileView ? eighteenmobile : eighteendesktop}
                                alt="Image alt"
                                style={{ objectFit: "contain", width: isMobileView ? '51.38vw' : '32.083vw', height: isMobileView ? '25.87vh' : '41.50vh' }}

                            />
                            <Typography
                                className={marigold.className}
                                sx={{
                                    fontSize: isMobileView ? '80px' : '200px',
                                    color: colors.primary,
                                    position: 'absolute',
                                    top: isMobileView ? '25vh' : '45vh',
                                    right: isMobileView ? '7vw' : '42vw',
                                    textShadow: '0px 0px 3px rgba(12, 24,90, 0.4)'
                                }}>
                                Ximena
                            </Typography>
                        </Grid>
                        <Grid item md={5} xs={12} display={'flex'} alignItems={'center'} flexDirection={'column'} sx={{ marginTop: isMobileView ? '8px' : '32px' }}>
                            {!isMobileView && <Image
                                src={isMobileView ? upMobile : upDesktop}
                                alt="Image alt"
                                style={{ objectFit: "contain", width: isMobileView ? '91.11vw' : '36.73vw', height: isMobileView ? '10.27vh' : '12.69vh', }}
                            />}
                            <Typography className={school.className} sx={{ fontSize: isMobileView ? '18px' : '32px', color: colors.primary, textAlign: 'center' }}>Acompañame a celebrar mi cumpleaños</Typography>
                            <DateInvite />
                            <Timer />
                            <GroupButtons />
                            <Image
                                src={isMobileView ? downMobile : downDesktop}
                                alt="Image alt"
                                style={{ objectFit: "contain", width: isMobileView ? '91.11vw' : '36.73vw', height: isMobileView ? '10.27vh' : '9.76vh', }}
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </div>
    );

}
