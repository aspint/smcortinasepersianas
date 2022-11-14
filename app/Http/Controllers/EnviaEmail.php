<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
 

class EnviaEmail extends Controller
{
   
    public function enviaEmail(Request $request)
    {
        $data = array('name'=> $request['name'], 'email'=> $request['email'],
            'telefone'=> $request['tel'], 'assunto'=> $request['assunto'], 'texto'=> $request['texto']);
        
        Mail::send('template/mail', $data, function($message) {
            $message->to('formweb@smcortinasepersianas.com.br', 'Comercial')->subject('Formulario de Contato');
            $message->from('formweb@smcortinasepersianas.com.br','Comercial SM Cortinas e Persianas');
            });
        
    }
}