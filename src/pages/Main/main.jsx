import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '../../config/theme'
import DownloadingIcon from '@mui/icons-material/Downloading';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Statistics from "../../components/SideBar/Statistics/Statistics";
function main() {
  return (
        <Stack direction={'row'} padding={'12px'}>
          <Stack width={'100%'} direction={'row'} spacing={'20px'}>
            {/* ======================================= Backend ishlatiladi */}
            <Stack bgcolor={theme.palette.primary.main} width={'100%'} height={'150px'} padding={'20px'} borderRadius={'10px'}   border={'2px solid'} borderColor={'#EAB308'}>
                {/* 1 */} <Typography variant='h2'>Ваш баланс - 0.00 сум</Typography>
                {/* 2 */}  <Typography variant='h2' marginBottom={'auto'}>Ecoin - 0</Typography>
                <Typography variant='body1'>Курс ( 1 ecoin = 10000 сум )</Typography>
            </Stack>
            <Stack width={'100%'} height={'150px'}>
              <Stack direction={'row'} bgcolor={theme.palette.primary.main} marginBottom={'auto'} padding={'15px'}  borderRadius={'10px'} paddingRight={'25px'} paddingLeft={'25px'} border={'2px solid'} borderColor={'#EAB308'} sx={{justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant='h2'>Гайды 5  </Typography>
                <DownloadingIcon sx={{width: '30px', height: '30px'}}/>
              </Stack>
              <Stack direction={'row'} bgcolor={theme.palette.primary.main} padding={'15px'}  borderRadius={'10px'} paddingRight={'25px'} paddingLeft={'25px'} border={'2px solid'} borderColor={'#EAB308'} sx={{justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant='h2'>Гайды 5  </Typography>
                <Typography variant='h2'>1</Typography>
              </Stack>
            </Stack>
            <Box bgcolor={theme.palette.primary.main} width={'100%'} height={'150px'} padding={'15px'} borderRadius={'10px'} border={'2px solid'} borderColor={'#EAB308'}>
              <Box sx={{textAlign: "center", paddingTop: '10px'}} >
                <RemoveRedEyeRoundedIcon sx={{width: '50px', height: '50px',}} />
                <Typography variant='h2' sx={{ textAlign: 'center' }}> Мониторинг 0 </Typography>
              </Box>
            </Box>
            <Stack bgcolor={theme.palette.primary.main} width={'100%'} height={'150px'} padding={'15px'} borderRadius={'10px'} border={'2px solid'} borderColor={'#EAB308'}>
              <Box sx={{textAlign: "center", paddingTop: '10px'}}>
                <AddCircleRoundedIcon sx={{width: '50px', height: '50px'}} />
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Создать ссылку</Typography>
              </Box>
            </Stack>
          </Stack>
          <Box maxWidth={"400px"}>
           <Statistics paid={10} rejected={5} in_progress={3} done={8} trash={2} />
          </Box>
        </Stack>
  )

export default main;
