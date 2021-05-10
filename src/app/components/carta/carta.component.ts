import {  Component, OnInit } from '@angular/core';

import { Imagenes, CartaCompleta } from '../../services/global';
import { environment } from "../../../environments/environment"

import { ProjectService } from '../../services/project.service';
import { CartaModel } from 'src/app/models/carta.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { SeccionModel } from 'src/app/models/seccion.model';


@Component({
    selector: 'app-carta',
    templateUrl: './carta.component.html',
    styleUrls: ['./carta.component.css'],
    providers: [ProjectService]
})
export class CartaComponent implements OnInit 
{
    public carta: CartaModel;
    
    constructor(
        private _projectService: ProjectService
    )
    {
        this.carta = new CartaModel();
    }

    ngOnInit(): void
    {
        if( environment.bbddMongo )
        {
            this.recuperarCartaCompletaFromBackEnd();
        }
        else
        {
            this.carta.secciones = this.generarSecciones( CartaCompleta );
        }
    }

    recuperarCartaCompletaFromBackEnd()
    {
        this._projectService.getComidas().subscribe( 
            response => {
                if( response.comidas )
                {
                    this.carta.secciones.push.apply( this.generarSecciones( response.comidas ) );

                    console.log( this.carta );
                }
            },
            error => console.log( <any>error )
        );

        this._projectService.getBebidas().subscribe( 
            response => {
                if( response.bebidas )
                {
                    this.carta.secciones.push.apply( this.generarSecciones( response.bebidas ) );

                    console.log( this.carta );
                }
            },
            error => console.log( <any>error )
        );
    }

    //Se genera la carta completa.
    //Cada seccion de la carta con tiene sus tipos de productos, y cada producto contiene sus datos
    generarSecciones( lstProductosIn: Array<ProductoModel> ): Array<SeccionModel>
    {
        var lstSecciones: Array<SeccionModel> = new Array<SeccionModel>();
        var seccCervezas: SeccionModel;
        var seccGinebras: SeccionModel;
        var seccLicores: SeccionModel;
        var seccRefrescos: SeccionModel;
        var seccRones: SeccionModel;
        var seccSangVerm: SeccionModel;
        var seccVinos: SeccionModel;
        var seccVozkas: SeccionModel;
        var seccWhiskys: SeccionModel;

        var contSeccion = 0;
        for( let i=0; i<lstProductosIn.length; i++ )
        {
            let productoBBDD = lstProductosIn[i];
            productoBBDD._id = i;

            switch( productoBBDD.tipo )
            {
                case 0:
                    if( seccCervezas == null )
                    {
                        seccCervezas = new SeccionModel( "Cervezas", 
                                                         Imagenes.imgCervezas, 
                                                         contSeccion );
                        
                        contSeccion++;
                    }

                    seccCervezas.productos.push( productoBBDD );

                    break;

                case 1:
                    if( seccGinebras == null )
                    {
                        seccGinebras = new SeccionModel( "Ginebras", 
                                                         Imagenes.imgGinebras, 
                                                         contSeccion );
                        
                        contSeccion++;
                    }

                    seccGinebras.productos.push( productoBBDD );

                    break;

                case 2:
                    if( seccLicores == null )
                    {
                        seccLicores = new SeccionModel( "Licores", 
                                                         Imagenes.imgLicores, 
                                                         contSeccion );
                        
                        contSeccion++;
                    }

                    seccLicores.productos.push( productoBBDD );
                    
                    break;

                case 3:
                    if( seccRefrescos == null )
                    {
                        seccRefrescos = new SeccionModel( "Refrescos", 
                                                          Imagenes.imgRefrescos, 
                                                          contSeccion );
                        
                        contSeccion++;
                    }

                    seccRefrescos.productos.push( productoBBDD );
                    
                    break;

                case 4:
                    if( seccRones == null )
                    {
                        seccRones = new SeccionModel( "Rones", 
                                                      Imagenes.imgRones,
                                                      contSeccion );
                        
                        contSeccion++;
                    }

                    seccRones.productos.push( productoBBDD );
                    break;

                case 5:
                    if( seccSangVerm == null )
                    {
                        seccSangVerm = new SeccionModel( "Sangria y Vermuth", 
                                                         Imagenes.imgSangVerm, 
                                                         contSeccion );
                        
                        contSeccion++;
                    }

                    seccSangVerm.productos.push( productoBBDD );
                    break;

                case 6:
                    if( seccVinos == null )
                    {
                        seccVinos = new SeccionModel( "Vinos", 
                                                      Imagenes.imgVinos, 
                                                      contSeccion );
                        
                        contSeccion++;
                    }

                    seccVinos.productos.push( productoBBDD );
                    break;

                case 7:
                    if( seccVozkas == null )
                    {
                        seccVozkas = new SeccionModel( "Vozkas", 
                                                        Imagenes.imgVozkas,
                                                        contSeccion );
                        
                        contSeccion++;
                    }

                    seccVozkas.productos.push( productoBBDD );
                    break;

                    case 8:
                    if( seccWhiskys == null )
                    {
                        seccWhiskys = new SeccionModel( "Whiskys", 
                                                        Imagenes.imgWhiskys, 
                                                        contSeccion );
                        
                        contSeccion++;
                    }

                    seccWhiskys.productos.push( productoBBDD );
                    break;

                default:
                    console.log( "hay productos sin catalogar: ", productoBBDD );
            }

        }

        lstSecciones.push( seccCervezas );
        lstSecciones.push( seccGinebras );
        lstSecciones.push( seccLicores );
        lstSecciones.push( seccRefrescos );
        lstSecciones.push( seccRones );
        lstSecciones.push( seccSangVerm);
        lstSecciones.push( seccVinos );
        lstSecciones.push( seccVozkas );
        lstSecciones.push( seccWhiskys );

        return lstSecciones;
    }
}