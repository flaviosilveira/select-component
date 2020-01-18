# Select Component

Select component is a way to use html select tag together with axios.
You just need to pass the url to build the data. Also combine one component with another that depends from the value selected in the first one.

## Getting Start

### Prerequisites

- [npm](https://docs.npmjs.com/cli/install)
- [Vue.js](https://vuejs.org/)

### Installing

```
npm install --save select-html-component
```

This will put a line in your package.json file calling select-html-component, and install it.
After the installation, import:

```
import SelectComponent from 'select-html-component/src/index.js'
```

### Usage

```
  <SelectComponent
    classname=""
    url="/example/value"
    model="example"
    :fk="first_select"
    depend_value="1"
    init="Please select one option..."
    selected="2"
  ></SelectComponent>
```

### Props
* **classname: ** - here you insert your css class name. By default it already contains the form-control bootstrap class. You class will be concatenated that.
* **url: ** - The url that will return your data. Component is expecting a id and name value.
* **model: ** - This will be used to construct name and id html properties. ***model_id*** and ***input-model_id*** respectively.
* **fk: ** - This is the value from a possible previous select that you use. Use a v-model in the first select and put your variable here to bind that.
* **depend_value: ** - When you already have your value from a previous select save in a database or something like that, use this prop to pass it to the component.
* **init: ** - This will add a first option above the others with the text you set here.
* **selected: ** - When you already have your value for this select save in a database or something like that, use this prop to pass it to the component.
