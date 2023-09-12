<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enlace;
use Exception;

class EnlaceController extends Controller
{
    public function index()
    {
        $items = Enlace::where('estado', 1)->get();
        $items->load('pagina');
        $items->load('role');

        return $items;
    }

    public function show($id)
    {
        
        $item = Enlace::find($id);

        return $item;
    }

    public function getByRol(int $id)
    {
        $items = Enlace::where('role_id', $id)->where('estado', 1)->get();
        $items->load('pagina');
        $items->load('role');

        return $items;
    }

    public function create(Request $body)
    {
        try {

            $item = new Enlace();

            $item->descripcion = $body->descripcion;
            $item->pagina_id = $body->pagina_id;
            $item->role_id = $body->role_id;
            $item->orden = $body->orden;
            
            $item->save();

           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete(int $id)
    {
        $item = Enlace::find($id);
        if ($item) {
            $item->estado = 0;
            $item->save();

            return "Enlace borrado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    } 

    public function update(Request $body, int $id)
    {
        $item = Enlace::find($id);
        if ($item) {

            $item->descripcion = $body->descripcion;
            $item->pagina_id = $body->pagina_id;
            $item->role_id = $body->role_id;
            $item->orden = $body->orden;
            
            $item->save();

            return "Enlace modificado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }          
    
}
