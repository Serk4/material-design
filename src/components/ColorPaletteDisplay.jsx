import { 
  Paper, 
  Typography, 
  Box,
  Chip
} from '@mui/material'
import { Palette } from '@mui/icons-material'

const ColorPaletteDisplay = ({ currentMode }) => {
  const paletteColors = [
    { name: 'Primary Blue', hex: '#1976d2', category: 'primary' },
    { name: 'Secondary Pink', hex: '#dc004e', category: 'secondary' },
    { name: 'Success Green', hex: '#2e7d32', category: 'success' },
    { name: 'Warning Amber', hex: '#ed6c02', category: 'warning' },
    { name: 'Error Red', hex: '#d32f2f', category: 'error' },
    { name: 'Info Cyan', hex: '#0288d1', category: 'info' },
  ]

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Palette sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5">
          Color Palette
        </Typography>
        <Chip 
          label={currentMode.toUpperCase()} 
          size="small" 
          sx={{ ml: 2 }}
          color="primary"
        />
      </Box>
      
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)'
          },
          gap: 2
        }}
      >
        {paletteColors.map((colorItem, index) => (
          <Box key={index}>
            <Box
              sx={{
                width: '100%',
                height: 80,
                bgcolor: colorItem.hex,
                borderRadius: 2,
                mb: 1,
                boxShadow: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 4
                }
              }}
            />
            <Typography variant="caption" display="block" fontWeight="medium">
              {colorItem.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {colorItem.hex}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default ColorPaletteDisplay
