import { Component } from '@angular/core'

    @Component({
        selector: 'mi-componente',
        template: `
            <h1> Hola mundo </h1>
            <p>Este es mi primer componente</p>
        `
    })
    export class MiComponente{

        constructor(){
            console.log("Component mi-componente cargado correctamente");
        }
    
    }