# Sesión 3 - Props y state

## Silenciar errores de ESLint

Solución de Luis Eduardo y  Mario López

Editar el archivo .estlintrc.cjs

Agregar en la sección `rules` (Línea 12)

Silenciar error en import de React

`'no-unused-vars': ['off']`

Silenciar errores de props

`'react/prop-types': ['off']`

Ejemplo de Rules con la configuración:

```js
rules: {
    'react-refresh/only-export-components': 'warn',
    'no-unused-vars': ['off'],
    'react/prop-types': ['off']
  },
```