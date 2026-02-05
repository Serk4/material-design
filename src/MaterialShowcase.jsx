import { useState } from 'react'
import { 
  ThemeProvider, 
  createTheme, 
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
  ToggleButtonGroup
} from '@mui/material'
import { 
  Brightness4, 
  Brightness7,
  Favorite,
  ArrowForward,
  List,
  GridView
} from '@mui/icons-material'
import FeatureShowcaseCard from './components/FeatureShowcaseCard.jsx'
import ColorPaletteDisplay from './components/ColorPaletteDisplay.jsx'
import ListDisplay from './components/ListDisplay.jsx'
import GridDisplay from './components/GridDisplay.jsx'

const MaterialShowcase = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [displayMode, setDisplayMode] = useState('list')
  const [mainView, setMainView] = useState('showcase')
  
  const customTheme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#dc004e',
        light: '#f50057',
        dark: '#c51162',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h3: {
        fontWeight: 600,
      },
    },
  })

  const toggleThemeMode = () => {
    setIsDarkTheme(prevMode => !prevMode)
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
              Welcome to Material Design
            </Typography>
            <Typography variant="body1" paragraph>
              Experience the beauty of Google's Material Design system through this 
              interactive showcase built with React, Vite, and MUI components.
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
          ) : (
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
          )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default MaterialShowcase
