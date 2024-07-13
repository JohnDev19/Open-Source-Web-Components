# Open Source Web Components

A collection of simple web components (e.g., buttons, forms, carousels) that beginners can improve or create new components for.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Available Components](#available-components)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Introduction

Open Source Web Components is a community-driven project aimed at providing a library of reusable, customizable web components. Our goal is to create a learning environment for beginners while also building a valuable resource for developers of all skill levels.


## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A modern web browser that supports Web Components (most up-to-date browsers do)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/JohnDev19/open-source-web-components.git
   ```

2. Navigate to the project directory:
   ```
   cd open-source-web-components
   ```

3. Open the `index.html` file in your browser to see the component showcase.

### Usage

To use a component in your project, copy the relevant HTML, CSS, and JavaScript files from the component's directory to your project. Then, import the component in your HTML file:

```html
<script type="module" src="path/to/component.js"></script>
```

You can then use the component in your HTML:

```html
<custom-button>Click me!</custom-button>
```

## Available Components

Here's a list of currently available components:

1. Button (`<custom-button>`)
2. Input Form (`<custom-form>`)
3. Carousel (`<custom-carousel>`)

Each component has its own directory with the following structure:

```
component-name/
├── component-name.js
├── component-name.css
└── README.md
```

Refer to each component's README for specific usage instructions and customization options.

## Contributing

We welcome contributions from developers of all skill levels! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-component`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add a new component'`)
5. Push to the branch (`git push origin feature/new-component`)
6. Create a new Pull Request

For more detailed instructions, please see our [CONTRIBUTING.md](CONTRIBUTING.md) file.

### Ideas for Contributions

- Improve existing components
- Add new features to components
- Create new components
- Improve documentation
- Fix bugs
- Add tests

## Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating in our community.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Basic file structure:

```
open-source-web-components/
├── README.md
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── index.html
├── components/
│   ├── button/
│   │   ├── button.js
│   │   ├── button.css
│   │   └── README.md
│   ├── form/
│   │   ├── form.js
│   │   ├── form.css
│   │   └── README.md
│   └── carousel/
│       ├── carousel.js
│       ├── carousel.css
│       └── README.md
└── assets/
    └── images/
```
