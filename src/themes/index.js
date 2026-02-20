import { createTheme } from '@mui/material/styles'

// Ella Theme - Soft, feminine, warm pastels
const ellaTheme = {
	name: 'Ella',
	palette: {
		primary: {
			main: '#E91E63', // Pink
			light: '#F48FB1',
			dark: '#C2185B',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#9C27B0', // Purple
			light: '#CE93D8',
			dark: '#7B1FA2',
			contrastText: '#ffffff',
		},
		background: {
			default: '#FFF8F8',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#37474F',
			secondary: '#546E7A',
		},
		success: {
			main: '#66BB6A',
			light: '#A5D6A7',
			dark: '#388E3C',
		},
		warning: {
			main: '#FFA726',
			light: '#FFCC80',
			dark: '#F57C00',
		},
		error: {
			main: '#EF5350',
			light: '#EF9A9A',
			dark: '#C62828',
		},
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 300,
			letterSpacing: '-0.02em',
		},
		h2: {
			fontWeight: 300,
			letterSpacing: '-0.01em',
		},
		h3: {
			fontWeight: 400,
			letterSpacing: '0em',
		},
		h4: {
			fontWeight: 400,
			letterSpacing: '0.01em',
		},
		body1: {
			letterSpacing: '0.01em',
		},
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0 4px 20px rgba(233, 30, 99, 0.1)',
					borderRadius: 16,
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 25,
					textTransform: 'none',
					fontWeight: 500,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				},
			},
		},
	},
}

// Ocean Theme - Cool blues and teals
const oceanTheme = {
	name: 'Ocean',
	palette: {
		primary: {
			main: '#0277BD', // Deep Blue
			light: '#4FC3F7',
			dark: '#01579B',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#00ACC1', // Teal
			light: '#4DD0E1',
			dark: '#00838F',
			contrastText: '#ffffff',
		},
		background: {
			default: '#F8FCFF',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#263238',
			secondary: '#455A64',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 8,
	},
}

// Forest Theme - Natural greens
const forestTheme = {
	name: 'Forest',
	palette: {
		primary: {
			main: '#388E3C', // Green
			light: '#66BB6A',
			dark: '#1B5E20',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#795548', // Brown
			light: '#A1887F',
			dark: '#5D4037',
			contrastText: '#ffffff',
		},
		background: {
			default: '#F8FFF8',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#2E7D32',
			secondary: '#388E3C',
		},
	},
	typography: {
		fontFamily: '"Roboto Slab", "Roboto", "serif"',
	},
	shape: {
		borderRadius: 6,
	},
}

// Sunset Theme - Warm oranges and reds
const sunsetTheme = {
	name: 'Sunset',
	palette: {
		primary: {
			main: '#FF5722', // Deep Orange
			light: '#FF8A65',
			dark: '#D84315',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#FFC107', // Amber
			light: '#FFD54F',
			dark: '#FF8F00',
			contrastText: '#000000',
		},
		background: {
			default: '#FFFBF0',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#BF360C',
			secondary: '#E65100',
		},
	},
	typography: {
		fontFamily: '"Playfair Display", "serif"',
	},
	shape: {
		borderRadius: 10,
	},
}

// Default Material Theme - Classic Material Design
const materialTheme = {
	name: 'Material',
	palette: {
		primary: {
			main: '#1976d2',
			light: '#42a5f5',
			dark: '#1565c0',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#dc004e',
			light: '#f50057',
			dark: '#c51162',
			contrastText: '#ffffff',
		},
		background: {
			default: '#fafafa',
			paper: '#ffffff',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
	shape: {
		borderRadius: 4,
	},
}

// Indigo & Amber Theme - Professional and vibrant
const indigoAmberTheme = {
	name: 'Indigo & Amber',
	palette: {
		primary: {
			main: '#3F51B5', // Indigo
			light: '#7986CB',
			dark: '#303F9F',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#FFC107', // Amber
			light: '#FFECB3',
			dark: '#FF8F00',
			contrastText: '#000000',
		},
		background: {
			default: '#F8F9FF',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#1A237E',
			secondary: '#3949AB',
		},
		success: {
			main: '#4CAF50',
			light: '#81C784',
			dark: '#388E3C',
		},
		warning: {
			main: '#FF9800',
			light: '#FFB74D',
			dark: '#F57C00',
		},
		error: {
			main: '#F44336',
			light: '#EF5350',
			dark: '#D32F2F',
		},
	},
	typography: {
		fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 700,
			letterSpacing: '-0.01em',
		},
		h2: {
			fontWeight: 600,
			letterSpacing: '0em',
		},
		h3: {
			fontWeight: 600,
			letterSpacing: '0em',
		},
		h4: {
			fontWeight: 500,
			letterSpacing: '0.01em',
		},
		body1: {
			letterSpacing: '0.01em',
			lineHeight: 1.6,
		},
	},
	shape: {
		borderRadius: 8,
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0 2px 12px rgba(63, 81, 181, 0.15)',
					borderRadius: 12,
					border: '1px solid rgba(63, 81, 181, 0.08)',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					textTransform: 'none',
					fontWeight: 600,
					boxShadow: 'none',
					'&:hover': {
						boxShadow: '0 2px 8px rgba(63, 81, 181, 0.2)',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
					border: '1px solid rgba(63, 81, 181, 0.06)',
				},
			},
		},
		MuiFab: {
			styleOverrides: {
				root: {
					boxShadow: '0 4px 14px rgba(255, 193, 7, 0.3)',
				},
			},
		},
	},
}

// Slate & Cyan Theme - Modern and sophisticated
const slateCyanTheme = {
	name: 'Slate & Cyan',
	palette: {
		primary: {
			main: '#475569', // Slate
			light: '#64748B',
			dark: '#334155',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#06B6D4', // Cyan
			light: '#67E8F9',
			dark: '#0891B2',
			contrastText: '#ffffff',
		},
		background: {
			default: '#F8FAFC',
			paper: '#FFFFFF',
		},
		text: {
			primary: '#0F172A',
			secondary: '#475569',
		},
		success: {
			main: '#10B981',
			light: '#34D399',
			dark: '#059669',
		},
		warning: {
			main: '#F59E0B',
			light: '#FBBF24',
			dark: '#D97706',
		},
		error: {
			main: '#EF4444',
			light: '#F87171',
			dark: '#DC2626',
		},
	},
	typography: {
		fontFamily: '"Inter", "system-ui", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 800,
			letterSpacing: '-0.025em',
		},
		h2: {
			fontWeight: 700,
			letterSpacing: '-0.02em',
		},
		h3: {
			fontWeight: 600,
			letterSpacing: '-0.01em',
		},
		h4: {
			fontWeight: 600,
			letterSpacing: '0em',
		},
		body1: {
			letterSpacing: '0.005em',
			lineHeight: 1.65,
		},
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow:
						'0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
					borderRadius: 8,
					border: '1px solid rgba(226, 232, 240, 0.8)',
					backgroundImage: 'none',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					textTransform: 'none',
					fontWeight: 500,
					boxShadow: 'none',
					'&:hover': {
						boxShadow: '0 4px 6px rgba(6, 182, 212, 0.15)',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
					border: '1px solid rgba(226, 232, 240, 0.6)',
				},
			},
		},
		MuiFab: {
			styleOverrides: {
				root: {
					boxShadow: '0 4px 14px rgba(6, 182, 212, 0.25)',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
				},
			},
		},
	},
}

export const availableThemes = {
	material: materialTheme,
	indigoAmber: indigoAmberTheme,
	slateCyan: slateCyanTheme,
	ella: ellaTheme,
	ocean: oceanTheme,
	forest: forestTheme,
	sunset: sunsetTheme,
}

export const createCustomTheme = (themeName, isDark = false) => {
	const themeConfig = availableThemes[themeName] || availableThemes.material

	return createTheme({
		...themeConfig,
		palette: {
			...themeConfig.palette,
			mode: isDark ? 'dark' : 'light',
			...(isDark && {
				background: {
					default: '#121212',
					paper: '#1e1e1e',
				},
				text: {
					primary: '#ffffff',
					secondary: '#b0b0b0',
				},
			}),
		},
	})
}

export default availableThemes
