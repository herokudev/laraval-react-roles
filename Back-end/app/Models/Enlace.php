<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enlace extends Model
{
    use HasFactory;
    public function pagina():BelongsTo
    {
        return $this->belongsTo(Pagina::class, 'pagina_id');
    }    

    public function role():BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id');
    }      
}
