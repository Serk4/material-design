import { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Chip,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material'
import {
  Memory,
  Cable,
  FlashOn,
  RadioButtonChecked,
  ToggleOn,
  BatteryFull,
  Sensors,
  Usb
} from '@mui/icons-material'
import circuitBoardsData from '../data/circuitBoardsData.json'

const CircuitBoardDisplay = () => {
  const [selectedBoardId, setSelectedBoardId] = useState('CB001')
  const [selectedComponentId, setSelectedComponentId] = useState(null)

  const selectedBoard = circuitBoardsData.circuitBoards.find(
    board => board.id === selectedBoardId
  )

  const getComponentIcon = (type) => {
    const iconMap = {
      resistor: <RadioButtonChecked />,
      capacitor: <BatteryFull />,
      led: <FlashOn />,
      button: <ToggleOn />,
      ic: <Memory />,
      diode: <FlashOn />,
      transistor: <Memory />,
      sensor: <Sensors />,
      connector: <Usb />
    }
    return iconMap[type] || <Cable />
  }

  const getComponentTypeColor = (type) => {
    const colorMap = {
      resistor: 'warning',
      capacitor: 'info', 
      led: 'error',
      button: 'default',
      ic: 'primary',
      diode: 'secondary',
      transistor: 'success',
      sensor: 'secondary',
      connector: 'success'
    }
    return colorMap[type] || 'default'
  }

  const handleBoardChange = (event) => {
    setSelectedBoardId(event.target.value)
    setSelectedComponentId(null)
  }

  const handleComponentClick = (componentId) => {
    setSelectedComponentId(componentId === selectedComponentId ? null : componentId)
  }

  const selectedComponent = selectedBoard?.components.find(
    comp => comp.id === selectedComponentId
  )

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Interactive Circuit Board Explorer
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Select a circuit board and click components to highlight and view details
      </Typography>

      {/* Board Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Circuit Board</InputLabel>
        <Select
          value={selectedBoardId}
          label="Select Circuit Board"
          onChange={handleBoardChange}
        >
          {circuitBoardsData.circuitBoards.map((board) => (
            <MenuItem key={board.id} value={board.id}>
              {board.name} - {board.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {/* Circuit Board Display */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              {selectedBoard?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {selectedBoard?.description}
            </Typography>
            
            {/* SVG Circuit Board */}
            <Box 
              sx={{ 
                border: '2px solid',
                borderColor: 'grey.300',
                borderRadius: 1,
                bgcolor: '#2E7D32',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <svg
                width={selectedBoard?.width || 400}
                height={selectedBoard?.height || 300}
                viewBox={`0 0 ${selectedBoard?.width || 400} ${selectedBoard?.height || 300}`}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              >
                {/* Circuit board background pattern */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4CAF50" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Components */}
                {selectedBoard?.components.map((component) => (
                  <g key={component.id}>
                    {/* Component body */}
                    <rect
                      x={component.x}
                      y={component.y}
                      width={component.width}
                      height={component.height}
                      fill={component.color}
                      stroke={selectedComponentId === component.id ? '#FFD700' : '#000'}
                      strokeWidth={selectedComponentId === component.id ? 3 : 1}
                      rx={2}
                      style={{
                        cursor: 'pointer',
                        filter: selectedComponentId === component.id ? 'brightness(1.3) drop-shadow(0px 0px 8px #FFD700)' : 'none'
                      }}
                      onClick={() => handleComponentClick(component.id)}
                    />
                    
                    {/* Component label */}
                    <text
                      x={component.x + component.width / 2}
                      y={component.y - 5}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#FFFFFF"
                      fontWeight="bold"
                      style={{ pointerEvents: 'none' }}
                    >
                      {component.id}
                    </text>
                    
                    {/* Component type indicator */}
                    <text
                      x={component.x + component.width / 2}
                      y={component.y + component.height / 2 + 3}
                      textAnchor="middle"
                      fontSize="8"
                      fill="#FFFFFF"
                      style={{ pointerEvents: 'none' }}
                    >
                      {component.value}
                    </text>
                  </g>
                ))}
                
                {/* Connection traces (simplified) */}
                <g stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.7">
                  <path d="M 30 110 L 120 110" />
                  <path d="M 120 110 L 120 150" />
                  <path d="M 190 110 L 300 110" />
                  <path d="M 200 180 L 250 180" />
                </g>
              </svg>
            </Box>
          </Paper>
        </Grid>

        {/* Components List */}
        <Grid item xs={12} md={3}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Components ({selectedBoard?.components.length || 0})
            </Typography>
            <List dense>
              {selectedBoard?.components.map((component) => (
                <ListItem key={component.id} disablePadding>
                  <ListItemButton
                    selected={selectedComponentId === component.id}
                    onClick={() => handleComponentClick(component.id)}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      bgcolor: selectedComponentId === component.id ? 'primary.light' : 'transparent',
                      '&:hover': {
                        bgcolor: selectedComponentId === component.id ? 'primary.main' : 'action.hover'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: component.color }}>
                      {getComponentIcon(component.type)}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2" fontWeight="bold">
                            {component.id}
                          </Typography>
                          <Chip 
                            label={component.type} 
                            size="small" 
                            color={getComponentTypeColor(component.type)}
                            variant="outlined"
                          />
                        </Box>
                      }
                      secondary={component.name}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Component Details */}
        <Grid item xs={12} md={3}>
          {selectedComponent ? (
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  {selectedComponent.name}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" gutterBottom>
                  <strong>ID:</strong> {selectedComponent.id}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Type:</strong> {selectedComponent.type}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Value:</strong> {selectedComponent.value}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>Description:</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedComponent.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip 
                    label={`Position: (${selectedComponent.x}, ${selectedComponent.y})`}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Select a component to view details
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CircuitBoardDisplay