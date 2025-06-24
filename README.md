# Research Website Template

This template provides a minimal Next.js and Tailwind CSS setup for building research project or workshop pages.

## Quick Start
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Customisation
All editable content lives in [`app/data/site.ts`](app/data/site.ts). Update the values in that file to change text, images and external links. Place any referenced images in the `public/` folder.

When deploying to GitHub Pages, set the environment variable `NEXT_PUBLIC_ROOT_PATH` to your repository name:
```bash
NEXT_PUBLIC_ROOT_PATH=my-repo-name npm run build
```
The static site will be output to the `out/` directory.

## License
Released under the MIT License.
