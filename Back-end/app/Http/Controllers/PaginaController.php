<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pagina;
use Exception;

class PaginaController extends Controller
{
    public function index()
    {
        $items = Pagina::where('estado', 1)->get();

        return $items;
    }

    public function show($id)
    {
        
        $item = Pagina::find($id);

        return $item;
    }

    public function create(Request $body)
    {
        try {

            $item = new Pagina();

            $item->url = $body->url;
            $item->descripcion = $body->descripcion;
            $item->icono = $body->icono;
            $item->tipo = $body->tipo;
            
            $item->save();

           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete(int $id)
    {
        $item = Pagina::find($id);
        if ($item) {
            $item->estado = 0;
            $item->save();

            return "Pagina borrada !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    } 

    public function update(Request $body, int $id)
    {
        $item = Pagina::find($id);
        if ($item) {
            $item->url = $body->url;
            $item->descripcion = $body->descripcion;
            $item->icono = $body->icono;
            $item->tipo = $body->tipo;
            
            $item->save();

            return "Pagina modificada !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }          
}
