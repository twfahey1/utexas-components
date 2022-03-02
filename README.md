# UTexas Components
This provides React components for use in UT web projects.

## Running locally
- From the source repo, `npm install`, then `npm run start`

## Developing components
- Components live in `/src/lib/components`. Create a new one based on one of the existing ones.
- The component then needs to be exported in `/src/lib/index.js`
- The component should be added to the `src/App.js`, so that it can be viewed from this repo in the local dev environment.

## Publishing a new version
- Increment the `version` in the `package.json`
- Running the `build` script (e.g. `npm run build`) will produce the compiled packaged output in the `dist` folder at the top level of the project to verify.
- Commit and push changes to the source repo.
- Can publish via `npm publish` to make new version available on npm.


## Pulling in the Forty Acres theme
- The current forty_acres styling from the Drupal Kit has been brought over and imported. It gets transpiled via Babel into components. The `src/lib/styles` folder contains the data copied over from the forty_acres Drupal theme. The `texas-design-system` folder did not have the `images` folder initially, but this should be retrievable from the forty_acres / STARTERKIT subtheme folder. 