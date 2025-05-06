# Personal Portfolio Website

A modern, responsive portfolio website for Imam Abdul Karim Sulaiman (Kareem) showcasing digital marketing and programming projects.

## Setup Instructions

1. Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/)

2. Navigate to your XAMPP installation directory:
   - Windows: `C:\xampp\htdocs`
   - macOS: `/Applications/XAMPP/xamppfiles/htdocs`
   - Linux: `/opt/lampp/htdocs`

3. Create a new folder called `portfolio` and copy all these files into it:
   - index.html
   - script.js
   - favicon.svg

4. Start XAMPP Control Panel and start the Apache service

5. Open your browser and visit:
   ```
   http://localhost/portfolio
   ```

## Features

- Modern, minimalist design
- Dark/Light mode toggle
- Responsive layout for all devices
- Smooth scroll animations
- Interactive portfolio tabs
- Mobile-friendly navigation
- Project cards with hover effects

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── script.js           # JavaScript for interactivity
├── favicon.svg         # Website favicon
└── README.md          # Setup instructions
```

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

The website uses Tailwind CSS for styling. The main color scheme can be modified in the Tailwind configuration section in index.html:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#3B82F6',
                'primary-light': '#60A5FA',
                'primary-dark': '#2563EB',
            }
        }
    }
}
