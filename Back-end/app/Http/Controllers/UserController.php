<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Bitacora;
use Illuminate\Http\Request;
use Exception;

class UserController extends Controller
{   

    public function login(Request $request){
        
        $user = User::where('email',$request->email)->where('password',$request->password)->get();
        if(count($user) == 0){
            return 0;
        }else{

            $bitc = new Bitacora();

            $bitc->accion = "Login";
            $bitc->entidad = "User";
            $bitc->usuario_id = 1;
            $bitc->fecha = "2023/09/12";
            $bitc->hora = "11:35:23";
            $bitc->ip_address = "127.0.0.1";
            $bitc->sistema_operativo = "Windows";
            $bitc->navegador = "Chrome";
            $bitc->save();  

            return 1;
        }
    }

    public function index()
    {
        $items = User::where('estado', 1)->get();
        $items->load('persona');
        $items->load('role');
        return $items;
    }

    public function show($id)
    {
        
        $item = User::find($id);
        $item->load('persona');
        $item->load('role');        

        return $item;
    }

    public function getByEmail($email)
    {
        $item = User::where('email', $email)->get();
        $item->load('persona');
        $item->load('role');        

        return response()->json($item);
    }

    public function create(Request $body)
    {
        try {

            $item = new User();

            $item->user_name = $body->user_name;
            $item->email = $body->email;
            $item->password = $body->password;
            $item->persona_id = $body->persona_id;
            $item->role_id = $body->role_id;            
            $item->save();
           
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    
    public function delete(int $id)
    {
        $item = User::find($id);
        if ($item) {
            $item->estado = 0;
            $item->save();

            return "Usuario borrado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }

    public function update(Request $body, int $id)
    {
        $item = User::find($id);
        if ($item) {
            $item->user_name = $body->user_name;
            $item->email = $body->email;
            $item->password = $body->password;
            $item->persona_id = $body->persona_id;
            $item->role_id = $body->role_id;
            
            $item->save();

            return "Usuario modificado !! ";
        } else {
            return response()->json([
                'message' => 'No records found'
            ], 200);
        }
    }    

}