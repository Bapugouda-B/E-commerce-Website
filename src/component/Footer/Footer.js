import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
      <Grid container className='mt-10 bg-black text-white text-center' sx={{bgcolor:"black", color:"white", py:3}}>
<Grid item xs={12} sm={6} md={6}>
    <Typography variant='h6' className='pb-5'>Company</Typography>
    <Typography variant='h6' className='pb-5'>About</Typography>
</Grid>
      </Grid>
    </div>
  )
}

export default Footer
