# Contributing to shadcn/ui Showcase

Thank you for your interest in contributing to this project! We welcome contributions from everyone, whether you're fixing bugs, adding new features, improving documentation, or sharing feedback.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended), npm, yarn, or bun
- Git

### Development Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/shadcn-showcase.git
   cd shadcn-showcase
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/shadcn-showcase.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Types of Contributions

### 🐛 Bug Reports

When reporting bugs, please include:

- **Bug Description**: Clear description of what went wrong
- **Steps to Reproduce**: Step-by-step instructions to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: Browser, OS, Node.js version
- **Screenshots**: If applicable

**Bug Report Template:**
```markdown
**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. iOS]
 - Browser: [e.g. chrome, safari]
 - Version: [e.g. 22]
 - Node.js: [e.g. 18.17.0]
```

### ✨ Feature Requests

When suggesting new features:

- **Feature Description**: Clear description of the proposed feature
- **Use Case**: Why this feature would be useful
- **Implementation Ideas**: Optional suggestions for implementation
- **Alternatives**: Any alternative solutions you've considered

### 🔧 Code Contributions

We welcome code contributions! Here's how to contribute:

#### Component Examples

Add new component examples or improve existing ones:

1. Create component files in `src/components/examples/`
2. Follow the existing naming convention
3. Include TypeScript types
4. Add responsive design considerations
5. Ensure accessibility compliance

#### Documentation

Improve documentation by:

- Fixing typos or unclear explanations
- Adding missing information
- Creating tutorials or guides
- Improving code examples

#### Bug Fixes

When fixing bugs:

1. Create a branch from `main`: `git checkout -b fix/bug-description`
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 🎯 Development Guidelines

### Code Style

We use the following tools for consistent code style:

- **ESLint**: For code linting
- **Prettier**: For code formatting
- **TypeScript**: For type safety

Run these commands before committing:

```bash
# Lint code
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

### Component Guidelines

When creating or modifying components:

1. **Use TypeScript**: All components should have proper type definitions
2. **Follow Naming Conventions**: Use PascalCase for component names
3. **Include Props Interface**: Define clear prop interfaces
4. **Add JSDoc Comments**: Document component purpose and props
5. **Handle Edge Cases**: Consider loading states, errors, empty states
6. **Responsive Design**: Ensure components work on all screen sizes
7. **Accessibility**: Include proper ARIA attributes and keyboard support

**Example Component Structure:**
```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MyComponentProps {
  /** The title to display */
  title: string
  /** Optional click handler */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
}

/**
 * MyComponent displays a title with an optional click handler.
 * 
 * @param title - The title to display
 * @param onClick - Optional click handler
 * @param className - Additional CSS classes
 */
export function MyComponent({ 
  title, 
  onClick, 
  className 
}: MyComponentProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (!onClick) return
    
    setIsLoading(true)
    try {
      await onClick()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button 
        onClick={handleClick} 
        disabled={isLoading}
        aria-label={`Action for ${title}`}
      >
        {isLoading ? "Loading..." : "Click Me"}
      </Button>
    </div>
  )
}
```

### Testing Guidelines

When adding new features:

1. **Write Tests**: Include unit tests for new components
2. **Test Accessibility**: Ensure components are accessible
3. **Test Responsiveness**: Verify components work on different screen sizes
4. **Manual Testing**: Test the feature in the browser

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run accessibility tests
pnpm test:a11y
```

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**
```bash
feat(components): add new data table component
fix(button): resolve focus state accessibility issue
docs(readme): update installation instructions
style(forms): improve input component spacing
refactor(utils): simplify class name utility function
```

## 📋 Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow the coding guidelines
   - Write clear commit messages
   - Add tests if applicable
   - Update documentation

3. **Test Your Changes**
   ```bash
   pnpm build
   pnpm test
   pnpm lint
   ```

4. **Update Documentation**
   - Update README if needed
   - Add component documentation
   - Include usage examples

5. **Submit Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Include screenshots if UI changes
   - Fill out the PR template completely

### Pull Request Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## How Has This Been Tested?
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing
- [ ] Accessibility testing

## Screenshots (if applicable)
Add screenshots to show the changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

## 🏷️ Issue Labels

We use labels to categorize issues and PRs:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to docs
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested
- `wontfix`: This will not be worked on

## 👥 Community

### Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct.

### Getting Help

- **GitHub Discussions**: For questions and general discussion
- **GitHub Issues**: For bug reports and feature requests
- **Discord**: Join our community Discord server (link in README)

### Recognition

Contributors will be recognized in:

- README contributors section
- Release notes for significant contributions
- GitHub contributor insights

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)
- [React Accessibility Guidelines](https://reactjs.org/docs/accessibility.html)

## 🎉 Thank You!

Thank you for considering contributing to this project! Every contribution, no matter how small, helps make this project better for everyone.

---

If you have any questions about contributing, please don't hesitate to reach out by creating an issue or joining our community discussions.