import { useState } from 'react'
import { 
  Box, 
  Typography, 
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardMedia
} from '@mui/material'
import { DragIndicator, Info, Close } from '@mui/icons-material'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import productsData from '../data/productsData.json'

const GridDisplay = () => {
  const [products, setProducts] = useState(productsData.products)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(products)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Update order numbers
    const updatedItems = items.map((item, index) => ({
      ...item,
      orderNumber: index + 1
    }))

    setProducts(updatedItems)
  }

  const handleCardClick = (product) => {
    setSelectedProduct(product)
    setDetailsOpen(true)
  }

  const handleCloseDetails = () => {
    setDetailsOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Electronic Parts Catalog - Grid View
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Click cards for details • Drag to reorder • {products.length} products
        </Typography>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="products-grid">
            {(provided) => (
              <Grid
                container
                spacing={3}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {products.map((product, index) => (
                  <Draggable key={product.id} draggableId={product.id} index={index}>
                    {(provided, snapshot) => (
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          onClick={() => handleCardClick(product)}
                          sx={{
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid',
                            borderColor: snapshot.isDragging ? 'primary.main' : 'divider',
                            transform: snapshot.isDragging ? 'rotate(5deg)' : 'none',
                            boxShadow: snapshot.isDragging ? 4 : 1,
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              boxShadow: 3,
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              p: 1,
                              bgcolor: 'primary.main',
                              minHeight: '48px'
                            }}
                          >
                            <Chip 
                              label={`#${product.orderNumber}`} 
                              size="small" 
                              sx={{ color: 'white', bgcolor: 'primary.dark', fontWeight: 'bold' }}
                            />
                            <IconButton 
                              {...provided.dragHandleProps}
                              onClick={(e) => e.stopPropagation()}
                              sx={{ color: 'white' }}
                            >
                              <DragIndicator />
                            </IconButton>
                          </Box>
                          
                          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                            <Typography variant="h6" component="h2" gutterBottom>
                              {product.name}
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary">
                              Click for details
                            </Typography>
                          </CardContent>
                          
                          <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                            <Button 
                              size="small" 
                              variant="outlined" 
                              startIcon={<Info />}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleCardClick(product)
                              }}
                            >
                              View Details
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      </Paper>

      {/* Product Details Dialog */}
      <Dialog 
        open={detailsOpen} 
        onClose={handleCloseDetails}
        maxWidth="md"
        fullWidth
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h5">{selectedProduct.name}</Typography>
                <Typography variant="subtitle2" color="primary">
                  Order #{selectedProduct.orderNumber} • {selectedProduct.id}
                </Typography>
              </Box>
              <IconButton onClick={handleCloseDetails}>
                <Close />
              </IconButton>
            </DialogTitle>
            
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>Product Information</Typography>
                  <Typography variant="body1" paragraph>{selectedProduct.description}</Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      ${selectedProduct.price}
                    </Typography>
                    <Typography variant="body2" color="success.main">
                      {selectedProduct.inStock} units in stock
                    </Typography>
                    <Typography variant="body2">
                      Category: {selectedProduct.category} • {selectedProduct.manufacturer}
                    </Typography>
                  </Box>

                  <Typography variant="h6" gutterBottom>Specifications</Typography>
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <Grid item xs={6} key={key}>
                        <Typography variant="body2">
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Typography variant="h6" gutterBottom>Compatible Widgets</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProduct.compatibleWidgets.map((widget, idx) => (
                      <Chip key={idx} label={widget} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            
            <DialogActions>
              <Button onClick={handleCloseDetails}>Close</Button>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  )
}

export default GridDisplay