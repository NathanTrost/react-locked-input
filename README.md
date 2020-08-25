## Purpose

The basic idea here is to present a React based input component with locking ability, that can be consumed with projects built with 3 of the more popular UI libraries, [Ant Design](https://ant.design/), [React Bootstrap](https://react-bootstrap.github.io/), and [Material UI](https://material-ui.com/).

## Installation

```
npm install --save react-locked-input
```

Include one of the modules in your project:

```js
import { AntDLockedInput } from "react-locked-input";
```

And use it as such:

```jsx
<AntDLockedInput
  label="Ant Design"
  name="antd-locked-example"
  placeholder="Locked Example"
  onChange={({ name, value }, event) => {
    console.log(`${name} has a value of ${value}`);
    console.log(event);
  }}
/>
```

Currently `AntDLockedInput`, `MuiLockedInput`, `RbsLockedInput` are the three available components.

## API

The API for all three components matches with the exceptions of the `btnClass` and `btnType` props.
| Name | Type | Default | Description |
| ---------------- | ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **btnClass** | `String` | | Modifier class applied to the lock button (For Bootstrap component only). |
| **btnType** | `String` | | One of classes, `primary`, `secondary`, `success`, `warning`, `danger`, `info`, `light`, `dark`, `link`, (For Bootstrap component only). |
| **disabled** | `Boolean` | false | Input is disabled if true. |
| **iconLocked** | `Node` | | Alternative icon for locked, overwrites default icon. |
| **iconUnlocked** | `Node` | | Alternative icon for unlocked, overwrites default icon. |
| **id** | `String` | | Unique identifier associated with input and passed down to children. |
| **label** | `String` | | If provided displays as label above input. |
| **locked** | `Boolean` | false | Sets inputs initial state as locked. |
| **name** | `String` | | Unique name associated with input, used for accessibility and to cleanly identify input's data in upper levels of application. |
| **label** | `String` | | If provided displays as label above input. |
| **onChange** | `Function` | | Callback, returns value/name pairing and event. |
| **prepended** | `Boolean` | true | If true prepends input with lock button, if false appends it. |
| **type** | `String` | `text` | Sets type attribute on input element. One of `date`, `datetime-local`, `email`, `file`, `month`, `number`, `password`, `tel`, `text`, `time`, `url`, `week`. |
| **value** | `String` | | Initial value sent to input. |

## Upcoming

In the near future I would like to accomplish the following with this project:

- Add support for [Semantic UI](https://semantic-ui.com/)
- Expand upon accepted props, particularly providing a layout and error/warning props and further tightening and unification of all props.
- Incorporate [Storybook](https://storybook.js.org/) to run application rather than general `start` script.
- Incorporate some unit tests and add [Cypress](https://www.cypress.io/) testing to all functionality.
- Look in to further reducing dependencies from these libraries.
- Look in to centralizing file structures for the different components.
- Look in to extending this component to work for Select inputs as well.

A note on components, I have chosen to move away from pulling in the direct libraries to reduce the size of project, rather using the markup and CSS directly for a leaner experience. Should I break these out to thier own components as a later point, I may revert back to the library reliance.
