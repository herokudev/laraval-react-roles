<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persona;
use Exception;

class PersonaController extends Controller
{
    public function index()
    {
        $items = Persona::where('estado', 1)->get();

        return $items;
    }

    public function show($id)
    {
        
        $item = Persona::find($id);

        return $item;
    }

    public function create(Request $body)
    {
        try {

            $item = new Persona();

            $item->primer_nombre = $body->primer_nombre;
            $item->segundo_nombre = $body->segundo_nombre;
            $item->primer_apellido = $body->primer_apellido;
            $item->segundo_apellido = $body->segundo_apellido;
            
            $item->save();

           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete(int $id)
    {
        $item = Persona::find($id);
        if ($item) {
            $item->estado = 0;
            $item->save();

            return "Persona borrada !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    } 

    public function update(Request $body, int $id)
    {
        $item = Persona::find($id);
        if ($item) {
            $item->primer_nombre = $body->primer_nombre;
            $item->segundo_nombre = $body->segundo_nombre;
            $item->primer_apellido = $body->primer_apellido;
            $item->segundo_apellido = $body->segundo_apellido;
            
            $item->save();

            return "Persona modificada !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }      
}
