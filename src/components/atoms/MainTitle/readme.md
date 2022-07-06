# Utilização
To use this component you must respect the BEM Format (Block__element--modifier) with the available props 'elem, blockModifier and elemModifier' with the available classes in the 'styles.scss' file

## Exemplo de uso:

```javascript
    <MainTitle elem={""} elemModifier="" textContent={"What Pokemon are you looking for?"}/>
    <MainTitle elem={"about"} textContent={"Bulbasaur"} />
    <MainTitle elem={"about"} elemModifier={"mini"} textContent={"Bulbasaur"} />
```

## Customização

Caso queira customizar algo também é possivel utilizar o 'customModifier' like this:

```javascript
    <MainTitle elem={"about"} elemModifier={"mini"} textContent={"Bulbasaur"} customStyle={'ColorRedForSomeComponent'} />
```
```scss
    .colorRedForSomeComponent {
        color: red;
    }
```

> Note that the 'colorRed' is applied in the component as a classname so you should declare this class in the component stylesheet you're working on and not in the MainTitle
> We recommend that you use BEM as well in your custom class to avoid conflicts with other components