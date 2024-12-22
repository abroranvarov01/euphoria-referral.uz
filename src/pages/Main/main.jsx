import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '../../config/theme'

function main() {
  return (
        <Box padding={'12px'}>
          <Stack width={'100%'} direction={'row'} spacing={'20px'}>
            {/* ======================================= Backend ishlatiladi */}
            <Stack bgcolor={theme.palette.primary.main} width={'100%'} height={'116px'} padding={'15px'} borderRadius={'10px'}   border={'2px solid'} borderColor={'#EAB308'}>
                {/* 1 */} <Typography variant='h2'>Ваш баланс - 0.00 сум</Typography>
                {/* 2 */}  <Typography variant='h2' marginBottom={'5px'}>Ecoin - 0</Typography>
                <Typography variant='body1'>Курс ( 1 ecoin = 10000 сум )</Typography>
            </Stack>
            <Stack width={'100%'} height={'116px'}>
                <Typography bgcolor={theme.palette.primary.main} marginBottom={'auto'} padding={'12px'} variant='h2' borderRadius={'10px'} paddingRight={'25px'} paddingLeft={'25px'} border={'2px solid'} borderColor={'#EAB308'}>Гайды 5</Typography>
                <Typography bgcolor={theme.palette.primary.main} padding={'12px'} variant='h2' borderRadius={'10px'}  paddingRight={'25px'} paddingLeft={'25px'} border={'2px solid'} borderColor={'#EAB308'}>Ссылки</Typography>
            </Stack>
            <Stack bgcolor={theme.palette.primary.main} width={'100%'} height={'116px'} padding={'15px'} borderRadius={'10px'} border={'2px solid'} borderColor={'#EAB308'}>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Мониторинг 0</Typography>
            </Stack>
            <Stack bgcolor={theme.palette.primary.main} width={'100%'} height={'116px'} padding={'15px'} borderRadius={'10px'} border={'2px solid'} borderColor={'#EAB308'}>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>Создать ссылку</Typography>
            </Stack>
          </Stack>
        </Box>
  )
}

export default main