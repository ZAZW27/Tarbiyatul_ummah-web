# How to collaborate

## 1. Clone the repository

```bash
git clone https://github.com/ZAZW27/Tarbiyatul_ummah-web.git
cd Tarbiyatul_ummah-web
```

## 2. Create a branch

Never work directly on 'main' branch (other than me ofcourse ahihihi).

create branch before making any actual changes to the code or the packages.

```bash
git checkout -b <branch-name>
```

Example (but optional):

```bash
git checkout -b feat/login-page
git checkout -b fix/jwt-validation
git checkout -b chore/update-eslint
```

Each of those sample branches explain the core workload you do at that certain branch

## 3. Initiate dependency installment

Install dependencies **only from the project root**.

```bash
npm install
```

This project uses **npm Workspaces**. Running `npm install` from the root installs dependencies for every workspace automatically.

please do not install any dependency in the root directory to avoid conflicts

## 4. Project Structure

```
.
├── package.json               # Root workspace
└── src
    ├── frontend              # Next.js application
    └── backend
        └── api               # Express API
```

Current workspaces:

- `src/frontend`
- `src/backend/api`

---

## 5. Running the Project

```bash
npm run dev --workspace=src/frontend
```

This will run a server for frontend, so there will be no backend, unless you'd like to try for backends, here:


```bash
npm run dev --workspace=src/backend/api
```

This will enable API usage, so you could test the created API's for your use cases

Servers can be run simultaneusly with different console, feel free to try. 

## 6. Installing Packages

### Frontend package

you run these from the root directory, no need to go deep into frontend terminal dir. 

```bash
npm install <package> --workspace=src/frontend
```

Example:

```bash
npm install axios --workspace=src/frontend
```

Development dependency:

```bash
npm install -D <package> --workspace=src/frontend
```
---

### Root package (Additional informations, probably not gonna be implemented real soon)

Only install packages in the root if they are shared across the entire repository.

Examples:

- Prettier
- ESLint (shared configuration)
- Husky
- Commitlint

```bash
npm install -D <package>
```

Do **not** install backend or frontend libraries in the root package.

## 7. Formatting & Linting

Before committing, format the project.

```bash
npm run format
```

Verify formatting without modifying files:

```bash
npm run format:check
```

Run the linter:

```bash
npm run lint
```

Automatically fix lint issues when possible:

```bash
npm run lint:fix
```

Do not commit code that fails formatting or linting.

---

## 8. Commit your changes

Follow the Conventional Commits specification.

Examples:

```text
feat(frontend): add login page
fix(api): validate request body
docs: update installation guide
chore(root): configure prettier
```

---

## 9. Push your branch

```bash
git push origin <your-branch-name>
```

Example:

```bash
git push origin feature/login-page
```

---

## 10. Open a Pull Request

Open a Pull Request from your branch into `main`.

Do not merge directly into `main`.

---

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