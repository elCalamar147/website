import {ProductoModel} from './producto.model';

export class SeccionModel
{
    public titulo: string;
    public imagen: string;
	public productos: Array<ProductoModel>;
    public idSeccion: number;

    constructor( private _tittle: string, public imageIn: string, public id: number )
    {
        this.titulo = _tittle;
        this.imagen = imageIn;
        this.productos = new Array<ProductoModel>();
        this.idSeccion = id;
    }
}