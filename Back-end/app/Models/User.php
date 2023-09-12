<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Model
{
    use HasFactory;
    public function persona():BelongsTo
    {
        return $this->belongsTo(Persona::class, 'persona_id');
    }    

    public function role():BelongsTo
    {
        return $this->belongsTo(Role::class, 'role_id');
    }    
}