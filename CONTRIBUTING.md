# 🤝 Contributing to Shubham Sharma Portfolio

Thank you for your interest in contributing to this portfolio project! Whether you're reporting a bug, proposing a feature, or submitting code changes, your contributions are welcome.

## 🎯 Ways to Contribute

- 🐛 **Bug Reports**: Found something broken? Let us know!
- 💡 **Feature Requests**: Have an idea to make the portfolio better?
- 🔧 **Code Contributions**: Fix bugs, add features, or improve documentation
- 📖 **Documentation**: Help improve the README, add comments, or write guides
- 🎨 **Design**: Suggest UI/UX improvements or accessibility enhancements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ ([Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn package manager
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR-USERNAME/shubham-sharma-portfolio.git
   cd shubham-sharma-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code formatting (Prettier is configured)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Commit Messages

Use conventional commit format:

```
type(scope): description

Examples:
feat(hero): add animated background elements
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(header): improve responsive design
```

### Before Submitting

1. **Run linting**
   ```bash
   npm run lint
   npm run lint:fix  # Auto-fix issues
   ```

2. **Type checking**
   ```bash
   npm run type-check
   ```

3. **Build project**
   ```bash
   npm run build
   ```

4. **Test your changes**
   - Test on different screen sizes
   - Check dark/light mode compatibility
   - Verify accessibility with keyboard navigation

## 🔍 Pull Request Process

1. **Update documentation** if needed
2. **Add/update tests** for new features
3. **Follow the pull request template**
4. **Link related issues** in your PR description
5. **Request review** from maintainers

### Pull Request Template

```markdown
## 📝 Description
Brief description of changes

## 🔗 Related Issue
Fixes #(issue number)

## 🧪 Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested dark/light modes
- [ ] Accessibility verified

## 📷 Screenshots
Add screenshots if UI changes

## ✅ Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🐛 Bug Reports

When reporting bugs, please include:

- **Environment**: OS, browser, screen size
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For feature requests, please describe:

- **Problem**: What issue does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered
- **Additional context**: Screenshots, mockups, etc.

## 🎨 Design Guidelines

- **Colors**: Follow the established color palette
- **Typography**: Use consistent font sizes and weights
- **Spacing**: Follow the Tailwind spacing scale
- **Animations**: Keep them smooth and purposeful
- **Accessibility**: Ensure WCAG 2.1 AA compliance

## 📱 Responsive Design

- **Mobile First**: Design for mobile, then enhance for larger screens
- **Breakpoints**: Use Tailwind's responsive breakpoints
- **Touch Targets**: Ensure interactive elements are at least 44px
- **Images**: Optimize for different screen densities

## ♿ Accessibility

- **Semantic HTML**: Use proper HTML elements
- **ARIA Labels**: Add where needed for screen readers
- **Keyboard Navigation**: Ensure all features work with keyboard
- **Color Contrast**: Maintain WCAG AA standards
- **Focus Indicators**: Visible focus states for all interactive elements

## 🔒 Security

- **Dependencies**: Keep dependencies updated
- **Sanitization**: Sanitize any user inputs
- **HTTPS**: Ensure all external resources use HTTPS
- **CSP**: Follow Content Security Policy guidelines

## 📞 Questions?

- 💬 **Discussions**: Use GitHub Discussions for questions
- 📧 **Email**: contact@shubhamsharma.dev
- 🐛 **Issues**: Create an issue for bugs
- 💡 **Ideas**: Use GitHub Discussions for feature ideas

## 🙏 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Credited in relevant documentation

Thank you for contributing! 🎉