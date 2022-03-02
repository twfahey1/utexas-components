# UTexas Components
This provides React components for use in UT web projects.

## Developing components
- Components live in `/src/lib/components`.
- Once a new component is added or an existing one is updated, running the `build` script (e.g. `npm run build`) will produce the compiled packaged output in the `dist` folder at the top level of the project.

## Publishing a new version
- Increment the `version` in the `package.json`
- Can publish via `npm publish` to make new version available.
