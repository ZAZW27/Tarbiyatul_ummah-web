# How to collaborate


# Conventional Commits
The usage of conventional commits are widely used and to help other collaborators understand the core changes of your commits. Please follow these rules to better engage for this project

Format:

```text
<type>(optional-scope): short description
```

Example:

```text
feat(api): add user authentication
```

## Types

| Type | Purpose | Example |
|------|---------|---------|
| feat | Add a new feature | `feat(frontend): add login page` |
| fix | Fix a bug | `fix(api): validate JWT token` |
| chore | Maintenance, tooling, configs, dependencies | `chore(root): configure prettier` |
| docs | Documentation only | `docs: update README` |
| style | Formatting only (no logic changes) | `style: format code with prettier` |
| refactor | Improve code without changing behavior | `refactor(api): simplify auth service` |
| perf | Performance improvements | `perf(database): optimize queries` |
| test | Add or modify tests | `test(api): add auth tests` |
| build | Build system or packaging changes | `build(docker): add PostgreSQL service` |
| ci | CI/CD workflow changes | `ci: add GitHub Actions workflow` |
| revert | Revert a previous commit | `revert: remove caching implementation` |

## Common Scopes

```text
root
workspace
frontend
api
database
docker
auth
user
```

Examples:

```text
chore(root): initialize monorepo
chore(workspace): add backend workspace
feat(frontend): create dashboard
feat(api): implement authentication
fix(api): handle invalid requests
refactor(database): simplify repository layer
build(docker): add PostgreSQL container
docs: update installation guide
test(api): add integration tests
```

## Tips

- Use the imperative mood ("add", "fix", "update"), not past tense ("added", "fixed").
- Keep the title under ~50–72 characters when possible.
- One commit should represent one logical change.