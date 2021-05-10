import {SeccionModel} from './seccion.model';

export class CartaModel
{
    public secciones: Array<SeccionModel>;

    constructor()
    {
        this.secciones = new Array<SeccionModel>();
    }
}