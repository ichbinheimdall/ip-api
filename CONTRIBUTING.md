# Contributing to IP API

First off, thank you for considering contributing to IP API! It's people like you that make IP API such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (include links, code samples, etc.)
- **Describe the behavior you observed and what you expected**
- **Include screenshots or GIFs** if applicable
- **Note your environment** (OS, Node.js version, etc.)

### 💡 Suggesting Features

Feature suggestions are welcome! Please provide:

- **A clear and descriptive title**
- **A detailed description of the proposed feature**
- **Explain why this feature would be useful**
- **List any alternatives you've considered**

### 🔧 Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Make your changes** following our coding style
3. **Test your changes** locally
4. **Commit with clear messages** following our commit conventions
5. **Push to your fork** and submit a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ip-api.git

# Navigate to the project
cd ip-api

# Install dependencies
npm install

# Start development server
npm run dev
```

## Coding Guidelines

### JavaScript Style

- Use ES6+ features
- Use `const` for constants, `let` for variables (avoid `var`)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(api): add city field to response
fix(geo): handle IPv6 addresses correctly
docs: update API usage examples
```

### Code Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Make requested changes and push to your branch
4. Once approved, your PR will be merged

## Project Structure

```
ip-api/
├── api/
│   └── index.js          # Main API handler
├── .github/
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── workflows/        # GitHub Actions (CI/CD)
├── package.json          # Dependencies and scripts
├── vercel.json           # Vercel configuration
└── README.md             # Project documentation
```

## Testing Locally

```bash
# Start development server
npm run dev

# Test the endpoint
curl http://localhost:3000
```

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

---

Thank you for contributing! 🎉
