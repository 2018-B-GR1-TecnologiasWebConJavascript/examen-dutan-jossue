const fs = require('fs');
const inquirer = require('inquirer');
const leerTypes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const pokemon_types = {
                    nombre: '',
                    pokemons: []
                };
                let pokemon = {
                    id: 0
                };
                // const pokemoIds = bdd.filter((v) => v.id)
                const types = bdd.map((v) => v.types);
                const type = types.map((v) => v[0].type);
                const typename = type.map((v) => v.name);
                const pokemoIds = type.filter((v) => v.name === typename[0]);
                console.log('poison', pokemoIds);
                //bdd.forEach((v) => console.log(v.findIndex((v) => v.types)))
                resolve(typename);
            }
        });
    });
};
const leerAbilities = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const abilities = bdd.map((v) => v.abilities);
                const ability = abilities.map((v) => v[0].ability);
                const abilityname = ability.map((v) => v.name);
                resolve(abilityname);
            }
        });
    });
};
const leerMoves = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const moves = bdd.map((v) => v.moves);
                const move = moves.map((v) => v[0].move);
                const movename = move.map((v) => v.name);
                resolve(movename);
            }
        });
    });
};
const items = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaEvery = bdd
                    .every((valorActual) => {
                    return valorActual.held_items.length > 0;
                });
                resolve(respuestaEvery);
            }
        });
    });
};
const sumatoria = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('pokemon/data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuesta = {
                    speedTotal: 0,
                    specialdefenseTotal: 0,
                    specialattack: 0,
                    defense: 0,
                    attack: 0,
                    hp: 0
                };
                const stats = bdd.map((v) => v.stats);
                // const stat = stats.map((v) => v[1].stat);
                // console.log(stat)
                respuesta.speedTotal = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[0].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                respuesta.specialdefenseTotal = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[1].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                respuesta.specialattack = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[2].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                respuesta.defense = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[3].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                respuesta.attack = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[4].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                respuesta.hp = stats
                    .reduce((acumulado, actual) => {
                    let strMasaActual = actual[5].base_stat;
                    //let numeroActual = strMasaActual.replace(/,/g, ".");
                    return acumulado + Number(strMasaActual);
                }, 0);
                resolve(respuesta);
            }
        });
    });
};
async function main() {
    try {
        const types = await leerTypes();
        const abilities = await leerAbilities();
        const moves = await leerMoves();
        console.log('\n1. Types:');
        console.log(types);
        console.log('\n2. abilities:');
        console.log(abilities);
        console.log('\n3. moves:\n');
        console.log(moves);
        const sumatoriares = await sumatoria();
        console.log('\n8. Sumatoria:\n');
        console.log(sumatoriares);
        console.log('\n9. Todos items?:\n');
        const itemsw = await items();
        console.log(itemsw);
        // console.log('\nIngresar People\n')
        // const respuestaIng = await inquirer.prompt(preguntasIngreso);
        // const respuestaIngresar = await ingresarPeople(respuestaIng);
        // console.log(respuestaIngresar);
    }
    catch (e) {
        console.log('Hubo un error', e);
    }
}
main();
