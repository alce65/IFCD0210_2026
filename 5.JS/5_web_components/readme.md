# Vanilla JS functional components

## Componente

### Opción A

Una función

- selector
- template
- renderización: template -> selector

```js
export const component = () => {
    const selector = 'app-x'

    const setTemplate = () => `Component`

    document.querySelector(selector).outerHTML = setTemplate()
}
```

### Opción B

- selector
- template
- elemento HTML
- renderización: elemento -> selector

## Uso de un componente

- Fichero HTML / o template
  - añado el selector
- Fichero JS
  - ejecutar ('registrar') el componente
    - opcionalmente pasamos valores a la instancia

## Uso de props en los componente

```js
  <app-componente data-x="">
```

Al usarlo

```js
  setTemplate(document.querySelector(selector).dataset.x)
```
