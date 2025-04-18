import React, { useEffect, useState } from 'react'
import axios from 'axios';

    function Tarifas() {

        const apiUrl = 'https://arenaymar-frdyg5caarhsd2g5.eastus-01.azurewebsites.net/api/TipoHabitacion/ObtenerOfertas';
        const [tarifas,setTarifas]= useState([]);

        useEffect( ()=>{
            getTarifas();
        },[]);

        const getTarifas = async () => {
            const respuesta = await axios.get(apiUrl);
            setTarifas(respuesta.data);
        }

        return (
            <div>
                <div class="container">
                <h1 >Tarifas</h1>
                <table class="table table-info table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarifas.map((tarifa,id)=>(
                            <tr class="align-bottom" key={tarifa.idTipoHabitacion}>
                                <td class="align-top">{tarifa.nombre}</td>
                                <td class="align-top">{tarifa.descripcion}</td>
                                <td class="align-top">{tarifa.precio}</td>
                                <td class="align-top">
                                    <figure class="figure">
                                        <img class="img-thumbnail w-50" src={tarifa.imagen}></img>
                                    </figure>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>


                </table>
                </div>
            </div>
        )
    }

export default Tarifas