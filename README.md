# Pearlcravino Website

A full-stack website for Pearlcravino, a premium makhana (fox nuts) snack brand.

## Features

- Responsive design that works on all devices
- Product showcase with detailed information
- Contact form for inquiries and partnerships
- About us page with company information
- Modern and clean UI with animations

## Technologies Used

- HTML5, CSS3, JavaScript
- Node.js and Express for backend
- Responsive design with CSS Grid and Flexbox
- Font Awesome for icons
- Google Fonts for typography

## Project Structure

```
pearlcravino-website/
├── public/               # Static files
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   ├── img/              # Images
│   ├── index.html        # Home page
│   ├── products.html     # Products page
│   ├── about.html        # About us page
│   └── contactus.html    # Contact page
├── server.js             # Express server
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/gintocg/pearlcravino-website1.git
   cd pearlcravino-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Deployment Instructions

### Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Install Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```
   netlify login
   ```
4. Deploy the site:
   ```
   netlify deploy
   ```
5. Follow the prompts to complete the deployment

### Deploying to Heroku

1. Create a Heroku account at [heroku.com](https://www.heroku.com/)
2. Install Heroku CLI:
   ```
   npm install -g heroku
   ```
3. Login to Heroku:
   ```
   heroku login
   ```
4. Create a new Heroku app:
   ```
   heroku create pearlcravino
   ```
5. Deploy to Heroku:
   ```
   git push heroku main
   ```

## Customization

- Replace placeholder images in the `img` folder with actual product images
- Update contact information in the contact page
- Modify product details in the products page
- Customize colors by editing CSS variables in the `style.css` file

## License

This project is licensed under the MIT License - see the LICENSE file for details.
