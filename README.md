# Digital Experience Collaboration

A modern landing page built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Modern UI with glass-like components
- Smooth animations
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CI/CD Pipeline

This project includes a robust CI/CD pipeline using GitHub Actions that automates the build, test, and deployment processes.

### Pipeline Structure

1. **Staging Workflow** (.github/workflows/staging.yaml)
   - Triggered on:
     - Push to the `develop` branch
     - Pull requests to `main` or `develop` branches
     - Manual trigger via GitHub interface
   - Creates preview deployments for all changes
   - For PRs, adds a comment with the preview URL

2. **Production Workflow** (.github/workflows/production.yaml)
   - Triggered on:
     - Push to the `main` branch
     - Manual trigger via GitHub interface
   - Deploys the application to production

### Setting Up the Pipeline

To use the CI/CD pipeline, you need to add the following secrets to your GitHub repository:

1. `VERCEL_TOKEN`: Your Vercel authentication token
2. `VERCEL_ORG_ID`: Your Vercel organization ID
3. `VERCEL_PROJECT_ID`: Your Vercel project ID

#### Getting Vercel Credentials

1. Install the Vercel CLI and log in:
```bash
npm i -g vercel
vercel login
```

2. Link your project to Vercel:
```bash
vercel link
```

3. Get your project information:
```bash
vercel whoami  # Get your user and team IDs
vercel project ls  # Get your project ID
```

4. Generate a token from the Vercel dashboard: Settings → Tokens

### Workflow

1. Create a feature branch from `develop` for your work
2. Make changes and create a PR to `develop`
3. The staging workflow will build and deploy a preview
4. After review, merge into `develop` for staging deployment
5. When ready for production, create a PR from `develop` to `main`
6. After review, merge into `main` for production deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
