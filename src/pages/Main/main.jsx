import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '../../config/theme'

function main() {
  return (
        <Box padding={'12px'}>
            <Stack bgcolor={theme.palette.primary.main}>
                <Typography variant='h2'>Ваш баланс - 0.00 сум</Typography>
                <Typography variant='h2'>Ecoin - 0</Typography>
            </Stack>
        </Box>
  )
}

export default main