# Realice los siguientes ejercicios

## 1) Busque los tipos de "types" en el arreglo `data.json`
```typescript
const arregloRespuestaTypes =[
    {
        tipo:'grass',
    },
    {
        tipo:'ground',
    }
];
```
## 2) Busque los tipos de "abilities" en el arreglo `data.json`
```typescript
const arregloRespuestaAbilities =[
    {
        nombre:'leaf-guard',
    },
    {
        nombre:'overgrow',
    }
];
```
## 3) Busque los tipos de "move" en el arreglo `data.json`

```typescript
const arregloRespuestaMove =[
    {
        nombre:'swords-dance',
    },
    {
        nombre:'cut',
    }
];
```

## 4) Clasifique a los pokemon por `types`

```typescript
const arregloRespuesta =[
    {
        nombre:'grass',
        pokemons:[
            {
                id:2
                ...
                ...
            }
        ]
    },
    {
        nombre:'ground',
                pokemons:[
                    {
                        id:2
                        ...
                        ...
                    }
                ]
    }
];
```

## 5) Clasifique a los pokemon por `abilities`

```typescript
const arregloRespuesta =[
    {
        nombre:'leaf-guard',
        pokemons:[
            {
                id:2
                ...
                ...
            }
        ]
    },
    {
        nombre:'overgrow',
                pokemons:[
                    {
                        id:2
                        ...
                        ...
                    }
                ]
    }
];
```

## 6) Clasifique a los pokemon por `move`

```typescript
const arregloRespuesta =[
    {
        nombre:'swords-dance',
        pokemons:[
            {
                id:2
                ...
                ...
            }
        ]
    },
    {
        nombre:'cut',
                pokemons:[
                    {
                        id:2
                        ...
                        ...
                    }
                ]
    }
];
```

## 7) Cree un arreglo del abecedario, revisar si existe al menos un pokemon con cada letra del abecedario.

Ejemplo de respuesta:

```typescript
const arregloRespuesta =[
    {
        a:true
    },
    {
        b:false
    },
];
```

## 8) Calcular la sumatoria de las propiedades de "stats".

EJ:

```typescript
const respuesta = {
    speedTotal:1000,
    special-defenseTotal: 2000
    ...
    ...
}
```

## 9) Revisar si todos los personajes guardan items **held_items**.

## 10) Calcular cuantos pokemon usan cada habilidad:

Ej:

```typescript
const respuesta = [
    ...
    {
        nombre:"leaf-guard",
        numeroPokemonUsanHabilidad:5
    },
    ...
]
```

## 11) Realizar la operacion de crear nuevos `pokemons` con la libreria `inquirer.js`

```typescript
const pokemon = [
    ...
    {
        "abilities": ['comer','dormir']
        "base_experience": 64,
        "game_indices": 124
        "height": 12
        "held_items": ['manzanas','peras']
        "id": 1
        "is_default": true
        "location_area_encounters": 'Quito'
        "moves": ['cut','jump']
        "name": 'pikachu',
        "order": 233,
        "stats": [12,23,34,25,22,25]
        "types": ['grass','water']
        "weight": 64
    }
    ...
]
```