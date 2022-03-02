# UTexas Components
This provides React components for use in UT web projects.

## Developing components
- Components live in `/src/lib/components`. Create a new one based on one of the existing ones.
- The component then needs to be exported in `/src/lib/index.js`
- Running the `build` script (e.g. `npm run build`) will produce the compiled packaged output in the `dist` folder at the top level of the project to verify.

## Publishing a new version
- Increment the `version` in the `package.json`
- Can publish via `npm publish` to make new version available.
