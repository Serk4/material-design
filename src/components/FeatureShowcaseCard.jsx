import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  Box
} from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

const FeatureShowcaseCard = ({ title, description, variant = 'primary' }) => {
  return (
    <Card 
      elevation={6}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: `${variant}.main`,
            mb: 2,
            borderRadius: 1
          }}
        />
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color={variant}
          endIcon={<ArrowForward />}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  )
}

export default FeatureShowcaseCard
