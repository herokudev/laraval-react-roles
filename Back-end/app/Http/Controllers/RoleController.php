<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Exception;


class RoleController extends Controller
{
    public function index()
    {
        $items = Role::where('estado', 1)->get();

        return $items;
    }

    public function show($id)
    {
        
        $item = Role::find($id);

        return $item;
    }

    public function create(Request $body)
    {
        try {

            $item = new Role();

            $item->descripcion = $body->descripcion;
            
            $item->save();

           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete(int $id)
    {
        $item = Role::find($id);
        if ($item) {
            $item->estado = 0;
            $item->save();

            return "Rol borrado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    } 

    public function update(Request $body, int $id)
    {
        $item = Role::find($id);
        if ($item) {
            $item->descripcion = $body->descripcion;
            
            $item->save();

            return "Rol modificado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }      
    
}
