# Colorzilla (NPM Package)

This repository contains an npm package designed to bring vibrant, colorized messages to your console output. With this package, you can easily print messages in various colors, making your console logs more readable and visually appealing. It provides a `Colorzilla` class with methods for printing messages in different colors.

## Installation

You can install the package via `npm`. Run the following command:

```bash
npm install colorzilla
```

## Usage

Once installed, you can import the `colorzilla` object from the package and use its methods to print messages in different colors. Here's an example:

```ts
import { zilla } from "colorzilla";

// Example usage
zilla.info("This is an informational message");
zilla.warn("This is a warning message");
zilla.error("This is an error message");
zilla.success("This is a success message");
zilla.secondary("This is a secondary message");
```

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please make sure to review the [Contribution Guidelines](CONTRIBUTING.md) before contributing.