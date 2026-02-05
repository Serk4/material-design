import { useState } from 'react'
import { 
  Box, 
  Typography, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid
} from '@mui/material'
import { DragIndicator, Memory, Close, Info } from '@mui/icons-material'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import productsData from '../data/productsData.json'

const ListDisplay = () => {
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

  const handleItemClick = (product) => {
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
          Electronic Parts Catalog - List View
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Click items for details • Drag to reorder • {products.length} products
        </Typography>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="products-list">
            {(provided) => (
              <List
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ bgcolor: 'background.paper' }}
              >
                {products.map((product, index) => (
                  <Draggable key={product.id} draggableId={product.id} index={index}>
                    {(provided, snapshot) => (
                      <>
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          sx={{
                            mb: 1,
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: snapshot.isDragging ? 'primary.main' : 'divider',
                            bgcolor: snapshot.isDragging ? 'action.hover' : 'background.paper',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              bgcolor: 'action.hover'
                            }
                          }}
                          onClick={() => handleItemClick(product)}
                        >
                          <ListItemIcon {...provided.dragHandleProps} onClick={(e) => e.stopPropagation()}>
                            <DragIndicator color="action" />
                          </ListItemIcon>
                          
                          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                            <Memory />
                          </Avatar>
                          
                          <ListItemText
                            primary={
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Chip 
                                  label={`#${product.orderNumber}`} 
                                  size="small" 
                                  color="primary" 
                                  variant="filled"
                                />
                                <Typography variant="h6">{product.name}</Typography>
                              </Box>
                            }
                            secondary="Click for details"
                          />
                          
                          <IconButton size="small" color="primary">
                            <Info />
                          </IconButton>
                        </ListItem>
                        {index < products.length - 1 && <Divider variant="inset" component="li" />}
                      </>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
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
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>Product Information</Typography>
                  <Typography variant="body1" paragraph>{selectedProduct.description}</Typography>
                  
                  <Typography variant="h6" sx={{ mt: 2 }}>Price & Availability</Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    ${selectedProduct.price}
                  </Typography>
                  <Typography variant="body2" color="success.main">
                    {selectedProduct.inStock} units in stock
                  </Typography>
                  <Typography variant="body2">
                    Category: {selectedProduct.category}
                  </Typography>
                  <Typography variant="body2">
                    Manufacturer: {selectedProduct.manufacturer}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>Specifications</Typography>
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <Typography key={key} variant="body2">
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </Typography>
                  ))}
                  
                  <Typography variant="h6" sx={{ mt: 2 }}>Compatible Widgets</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
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

export default ListDisplay