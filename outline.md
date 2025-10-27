# Stretcher Bar Service Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Main landing page with hero and product configurator
├── products.html           # Detailed product catalog with specifications
├── order.html              # Interactive order form and calculator
├── about.html              # Business story and craftsmanship showcase
├── main.js                 # Core JavaScript functionality
├── resources/              # Images and media assets
│   ├── hero-craftsman.png      # Generated hero image
│   ├── gallery-display.png     # Gallery showcase image
│   ├── keyable-detail.png      # Product detail image
│   ├── workshop-materials.png  # Workshop image
│   └── [searched images]       # Additional product images
└── design.md               # Design documentation
└── interaction.md          # Interaction specifications
```

## Page Structure & Content

### index.html - Main Landing Page
**Purpose**: Professional introduction with immediate access to ordering system
**Sections**:
1. **Navigation Bar**: Clean, wood-toned header with logo and main menu
2. **Hero Section**: 
   - Generated craftsman image background
   - Typewriter animation: "Precision Craftsmanship for Gallery-Quality Results"
   - Call-to-action button to product configurator
3. **Product Configurator**: 
   - Left: Product type selector (Keyable, Fixed, Exhibition)
   - Center: Visual preview with dimensions
   - Right: Customization options and pricing
4. **Gallery Showcase**: Splide.js carousel of completed projects
5. **Quick Stats**: Animated counters (years experience, frames made, satisfied artists)
6. **Testimonials**: Artist and gallery owner reviews
7. **Footer**: Contact info and copyright

### products.html - Product Catalog
**Purpose**: Detailed product information and specifications
**Sections**:
1. **Navigation Bar**: Consistent header
2. **Product Grid**: 
   - Keyable Stretcher Bars (with mechanism details)
   - Fixed Stretcher Bars (standard and heavy-duty)
   - Exhibition Frames (various profiles)
3. **Material Showcase**: Wood types (Pine, Oak, Poplar) with properties
4. **Size Guide**: Interactive dimension calculator
5. **Comparison Table**: Feature comparison between product types
6. **Gallery**: Before/after canvas stretching examples
7. **Technical Specifications**: Detailed measurements and tolerances

### order.html - Ordering System
**Purpose**: Complete order placement with real-time pricing
**Sections**:
1. **Navigation Bar**: Consistent header
2. **Multi-Step Order Form**:
   - Step 1: Product selection and customization
   - Step 2: Dimensions and quantity
   - Step 3: Wood type and finish options
   - Step 4: Contact and delivery information
   - Step 5: Order summary and confirmation
3. **Live Pricing Calculator**: Real-time cost updates
4. **Visual Preview**: 3D product visualization
5. **Shipping Calculator**: Delivery cost estimation
6. **Order History**: Save/load previous orders
7. **Payment Integration**: Secure checkout process

### about.html - Business Story
**Purpose**: Build trust and showcase craftsmanship expertise
**Sections**:
1. **Navigation Bar**: Consistent header
2. **Business Story**: Family tradition and expertise
3. **Workshop Tour**: Generated workshop images and process
4. **Craftsmanship Details**: Joinery techniques and quality standards
5. **Artist Partnerships**: Gallery and artist testimonials
6. **Quality Guarantee**: Warranty and satisfaction promise
7. **Contact Information**: Location, hours, and contact methods

## Interactive Components

### 1. Product Configurator (index.html)
- Real-time product visualization
- Dimension input with validation
- Price calculation updates
- Wood type selection with grain preview

### 2. Order Management System (order.html)
- Multi-step form with progress indicator
- Shopping cart functionality
- Order customization and options
- Contact form integration

### 3. Gallery Showcase (index.html, products.html)
- Image carousel with zoom functionality
- Filter by product type
- Before/after comparison sliders
- Customer project gallery

### 4. Size Calculator (products.html, order.html)
- Interactive dimension guide
- Unit conversion (inches/cm)
- Weight estimation for shipping
- Minimum/maximum size validation

## Technical Implementation

### JavaScript Functionality (main.js)
- Product configurator logic
- Pricing calculator
- Form validation and submission
- Image gallery controls
- Animation triggers and scroll effects
- Shopping cart management
- Local storage for order persistence

### Visual Effects & Libraries
- **Anime.js**: Page transitions and element animations
- **Typed.js**: Hero text typewriter effects
- **Splide.js**: Image carousels and galleries
- **ECharts.js**: Pricing charts and size guides
- **p5.js**: Subtle background particle effects
- **Splitting.js**: Text animation effects

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Optimized images for different screen sizes
- Collapsible navigation for mobile
- Swipe gestures for galleries

## Content Strategy

### Professional Tone
- Emphasize craftsmanship and quality
- Use technical terminology appropriately
- Highlight gallery and exhibition standards
- Focus on artist and customer satisfaction

### Visual Hierarchy
- Clear product differentiation
- Easy-to-scan specifications
- Prominent call-to-action buttons
- Consistent branding throughout

### User Experience Flow
1. Land on hero section → Immediate product access
2. Configure product → See real-time pricing
3. View detailed specs → Build confidence
4. Complete order → Secure checkout
5. Receive confirmation → Order tracking

## Success Metrics
- Order completion rate
- Time spent on product pages
- Configuration tool usage
- Contact form submissions
- Mobile vs desktop performance