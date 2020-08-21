# React Howler Audio Player
> Ready-to-use audio player made with React and Howler.

## Development
 
### Quick start

```bash
# Install dependencies
yarn install

# Run the dev server.
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available yarn scripts
- `yarn start`: starts the development server
- `yarn build`: builds the project for production
- `yarn test`: runs tests
- `yarn eject`: ejects from create-react-app
- `yarn eslint`: shows eslint warnings and errors for all source files
- `yarn lint-check`: shows output of prettier-eslint for all source files
- `yarn lint`: runs prettier-eslint on all source files and update them

### Code style
This project uses [prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint) to format the code.
The two linters are linked by [prettier-eslint](https://github.com/prettier/prettier-eslint).

All code pushed to the repository must respect the coding standards enforced by prettier and eslint.

A pre-commit hook will auto-run prettier-eslint at each commit and format the code automatically
then include the resulting code in the commit.
This hook is not magic nor meant to replace good coding practices, so code wisely :)
