# Gutenberg Typescript Block Scaffold

A simple scaffold for creating Gutenberg blocks using TypeScript and React. This scaffold provides a basic structure and configuration to help you get started quickly with building custom blocks for the WordPress editor.

---

## Features Overview

1. **Types configured**:
	- Typescript is configured to work with WordPress and React
2. **Most popular elements used**:
	- The scaffold includes the most popular elements used in WordPress blocks, such as:
		- MediaUpload
        - RichText
        - Toggle
        - Button
        - InnerBlocks

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Using find and rename (CTRL+SHIFT+R / CMD+SHIFT+R) rename next lines:
   - TypeScript block scaffold -> Your Block Name
   - Gutenberg block scaffold with types and basic parameters -> Your Block Description
   - ts-block -> Your text-domain


3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run start
   ```
5. Open your WordPress admin panel and navigate to the block editor. You should see your custom block available for use.

6. To build the project for production, run:
   ```bash
   npm run build
   ```

---

## Scripts

| Script               | Description                                       |
|----------------------|---------------------------------------------------|
|`npm run start` |	Start development mode with live reloading and PHP copying. |
|`npm run build` |	Build the project for production, copying PHP files. |
|`npm run format` |	Format the code using Prettier. |
|`npm run lint:css` |	Lint CSS files using WordPress coding standards. |
|`npm run lint:js` |	Lint JavaScript files using WordPress coding standards. |
|`npm run packages -update` |	Update WordPress packages to the latest versions. |
|`npm run plugin-zip` |	Create a ZIP file of the plugin for distribution. |


---

## License

This Gutenberg block is open-source and freely available for anyone to use, modify, copy, and distribute without any restrictions.

You are welcome to:
- Use it in personal and commercial projects.
- Modify and adapt it for your needs.
- Redistribute it in any form, with or without modifications.

No attribution is required, but it's always appreciated. 🚀
