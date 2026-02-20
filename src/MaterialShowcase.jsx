import { useState } from 'react'
import { 
  ThemeProvider, 
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Fab,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material'
import { 
  Brightness4, 
  Brightness7,
  Favorite,
  ArrowForward,
  List,
  GridView,
  Palette
} from '@mui/icons-material'
import FeatureShowcaseCard from './components/FeatureShowcaseCard.jsx'
import ColorPaletteDisplay from './components/ColorPaletteDisplay.jsx'
import ListDisplay from './components/ListDisplay.jsx'
import GridDisplay from './components/GridDisplay.jsx'
import CircuitBoardDisplay from './components/CircuitBoardDisplay.jsx'
import { createCustomTheme, availableThemes } from './themes/index.js'

const MaterialShowcase = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [displayMode, setDisplayMode] = useState('list')
  const [mainView, setMainView] = useState('showcase')
  const [selectedTheme, setSelectedTheme] = useState('material')
  
  // Create the theme using our flexible theme system
  const customTheme = createCustomTheme(selectedTheme, isDarkTheme)

  const toggleThemeMode = () => {
    setIsDarkTheme(prevMode => !prevMode)
  }

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value)
  }

  const handleDisplayModeChange = (event, newMode) => {
    if (newMode !== null) {
      setDisplayMode(newMode)
    }
  }

  const handleMainViewChange = (event, newView) => {
    setMainView(newView)
  }

  const showcaseFeatures = [
    { 
      heading: 'Responsive Grid', 
      details: 'Fluid layouts adapt seamlessly across all screen sizes',
      colorScheme: 'primary'
    },
    { 
      heading: 'Rich Typography', 
      details: 'Beautiful text hierarchy with Material Design principles',
      colorScheme: 'secondary'
    },
    { 
      heading: 'Elevation System', 
      details: 'Layered shadows create depth and visual hierarchy',
      colorScheme: 'success'
    },
  ]

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={4}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Material Design Gallery
            </Typography>
            
            {/* Theme Selector */}
            <FormControl sx={{ mr: 2, minWidth: 120 }} size="small">
              <InputLabel sx={{ color: 'inherit' }}>Theme</InputLabel>
              <Select
                value={selectedTheme}
                onChange={handleThemeChange}
                label="Theme"
                sx={{ 
                  color: 'inherit',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                  },
                  '.MuiSvgIcon-root': {
                    color: 'inherit',
                  }
                }}
              >
                {Object.entries(availableThemes).map(([key, theme]) => (
                  <MenuItem key={key} value={key}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Palette sx={{ fontSize: '1rem' }} />
                      {theme.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {/* Dark/Light Mode Toggle */}
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkTheme}
                  onChange={toggleThemeMode}
                  icon={<Brightness7 />}
                  checkedIcon={<Brightness4 />}
                />
              }
              label={isDarkTheme ? 'Dark' : 'Light'}
            />
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
            <Typography variant="h3" gutterBottom color="primary">
              MUI Theme Gallery
            </Typography>
            <Typography variant="body1" paragraph>
              Explore MUI's powerful theming system and React component library 
              through this interactive showcase. Discover how flexible design tokens, 
              typography scales, and component customization create cohesive user experiences.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Current Theme: <strong>{availableThemes[selectedTheme].name}</strong> • 
              Mode: <strong>{isDarkTheme ? 'Dark' : 'Light'}</strong>
            </Typography>
            
            {/* Main Navigation */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
              <Tabs 
                value={mainView} 
                onChange={handleMainViewChange} 
                aria-label="main navigation"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Showcase" value="showcase" />
                <Tab label="Display Components" value="display" />
                <Tab label="Interactive Display" value="circuit" />
              </Tabs>
            </Box>
          </Paper>

          {/* Conditional Content Rendering */}
          {mainView === 'showcase' ? (
            <>
              {/* Showcase Content */}
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)'
                  },
                  gap: 3,
                  mb: 4
                }}
              >
                {showcaseFeatures.map((feature, idx) => (
                  <Box key={idx}>
                    <FeatureShowcaseCard 
                      title={feature.heading}
                      description={feature.details}
                      variant={feature.colorScheme}
                    />
                  </Box>
                ))}
              </Box>

              <ColorPaletteDisplay currentMode={isDarkTheme ? 'dark' : 'light'} />

              <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Interactive Components
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                  <Button variant="contained" color="primary">
                    Primary Action
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary Action
                  </Button>
                  <Button variant="text">
                    Text Action
                  </Button>
                  <Fab color="primary" aria-label="favorite" size="small">
                    <Favorite />
                  </Fab>
                </Box>
              </Paper>
            </>
          ) : mainView === 'display' ? (
            <>
              {/* Display Components Content */}
              <Paper elevation={1} sx={{ p: 3, mb: 3 }}>            
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>              
                  <Typography variant="h4" color="primary">Display Components</Typography>              
                  <ToggleButtonGroup
                    value={displayMode}
                    exclusive
                    onChange={handleDisplayModeChange}
                    aria-label="display mode"
                    size="medium"
                  >
                    <ToggleButton value="list" aria-label="list view">
                      <List sx={{ mr: 1 }} />
                      List View
                    </ToggleButton>
                    <ToggleButton value="grid" aria-label="grid view">
                      <GridView sx={{ mr: 1 }} />
                      Grid View
                    </ToggleButton>
                  </ToggleButtonGroup>            
                </Box>
              </Paper>
              
              {/* Full Page Display Component */}
              <Box sx={{ minHeight: '60vh' }}>
                {displayMode === 'list' ? <ListDisplay /> : <GridDisplay />}
              </Box>
            </>
          ) : (
            <>
              {/* Circuit Board Content */}
              <Box sx={{ minHeight: '60vh' }}>
                <CircuitBoardDisplay />
              </Box>
            </>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default MaterialShowcase
