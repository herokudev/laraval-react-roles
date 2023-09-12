<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bitacora;
use Exception;

class BitacoraController extends Controller
{
    public function index()
    {
        $items = Bitacora::with('usuario.role', 'usuario.persona')->get();
        
        return $items;
    }

    public function show($id)
    {
        
        $item = Bitacora::find($id);

        return $item;
    }

    public function create(Request $body)
    {
        try {

            $item = new Bitacora();

            $item->accion = $body->accion;
            $item->entidad = $body->entidad;
            $item->usuario_id = $body->usuario_id;
            $item->fecha = $body->fecha;
            $item->hora = $body->hora;
            $item->ip_address = $body->ip_address;
            $item->sistema_operativo = $body->sistema_operativo;
            $item->navegador = $body->navegador;

            $item->save();

           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
