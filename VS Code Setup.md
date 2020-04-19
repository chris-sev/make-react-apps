# VS Code Setup

Hey hey! 😃 [VS Code](https://code.visualstudio.com/) is an amazing editor. We'll be using it for this entire course.

Here you'll find my VS Code Settings, extensions, fonts, and favorite keyboard shortcuts.

All of this is meant to make us the most efficient and fast developers possible.

## Settings

- Auto format on save. Let Prettier handle formatting for us.
- Cursor smooth caret animation on. A cool little effect
- Hide activity bar
- Hide status bar

## Extensions

- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock): To change the color of our editor
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): To help find errors and fix them
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets): Snippets to speed up writing code (clg for console.log is the best)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Easy way to import from other files
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Auto format. Let the humans write code. Let the computer format.
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets): Small snippets for React (`imd` is a good one)
- [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log): Make console.logging even faster

### My Custom Snippet for React Functional Components

Here's my custom snippet that I use. You'll see me type `rfc` to create a React component.

1. Open command palette
2. Preferences: Configure User Snippets
3. Add these two objects to the file

```json
"React Functional Component": {
  "scope": "javascript,typescript",
  "prefix": "rfc",
  "body": [
    "import React from 'react';\n",
    "export default function ${1:name}(${2:props}) {",
    "\t${3:your stuffs}",
    "}"
  ]
},
"Export Default Function": {
  "scope": "javascript,typescript",
  "prefix": "exdf",
  "body": [
    "export default function ${1:name}(${2:props}) {",
    "\t${3:your stuffs}",
    "}"
  ]
}
```

## Themes

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Monokai Pro](https://monokai.pro/)

## Fonts

- [Cascadia Code](https://github.com/microsoft/cascadia-code) (Free): My current daily font
- [Dank Mono](https://dank.sh/) (Paid)
- [Operator Mono](https://www.typography.com/fonts/operator/styles) (Paid)
- [Fira Code](https://github.com/tonsky/FiraCode) (Free)
- Inconsolata (Free)

## Keyboard Shortcuts

- Show command palette: cmd shift p
- Show and hide sidebar: cmd b
- Show explorer: cmd shift e
- Show terminal: ctrl `
- Multiple cursors
