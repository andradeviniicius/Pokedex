# Utilização
To use this component you must respect the BEM Format (Block__element--modifier) with the available props 'elem, blockModifier and elemModifier' with the available classes in the 'styles.scss' file

## Exemplo de uso:

```javascript
    <SubTitle elem={""} elemModifier="" textContent={"What Pokemon are you looking for?"}/>
    <SubTitle elem={"about"} textContent={"Bulbasaur"} />
    <SubTitle elem={"about"} elemModifier={"mini"} textContent={"Bulbasaur"} />
```

## Customização

Caso queira customizar algo também é possivel utilizar o 'customStyle' like this:

```javascript
    <SubTitle elem={"about"} elemModifier={"mini"} textContent={"Bulbasaur"} customStyle={'ColorRedForSomeComponent'} />
```
```scss
    .colorRedForSomeComponent {
        color: red;
    }
```

> Note that the 'ColorRedForSomeComponent' is 'applied' in the 'SubTitle' as a 'classname' so you should declare this class in the component stylesheet you're working on and not in the SubTitle
> We recommend that you 'use BEM' as well 'in your custom class' to avoid conflicts with other components