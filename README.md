# Workshop Website Template

This repository contains a minimal template for building a research workshop page using **Next.js** and **Tailwind CSS**.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Start a development server
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` to see the site.

## Customisation

All site specific content lives in [`app/data/site.ts`](app/data/site.ts).  Update the
arrays and URLs in that file to change speakers, organisers or external links.  Images
referenced there should be placed in the `public/` folder.

When deploying to GitHub Pages set the environment variable `NEXT_PUBLIC_ROOT_PATH`
to the repository name so that static assets are resolved correctly:

```bash
NEXT_PUBLIC_ROOT_PATH=my-repo-name npm run build
```

The generated static site will appear in the `out/` directory.

## License

Released under the MIT License.
