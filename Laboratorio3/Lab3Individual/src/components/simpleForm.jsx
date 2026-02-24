import React from 'react'
import { useEffect, useState } from 'react';
import { Message } from './message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        Matricula: 'A01029211',
        Nombre: 'Santaigo',
        Apellidos: 'Cordova Molina',
        Edad: '22',
        Universidad: "Tec de monterrey",
        Carrera: 'ITC',
    });

    const [submitted, setSubmitted] = useState(null);
    const { Matricula, Nombre,  Apellidos, Edad, Universidad, Carrera } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [ name ]: value
    });
    }


    const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formState);
  };

    //useEffect( () => {
    //// console.log('useEffect called!');
    //}, []);
    //useEffect( () => {
    //// console.log('formState changed!');
    //}, [formState]);
    //useEffect( () => {
    //// console.log('email changed!');
    //}, [ email ]);


  return (
    <>
        <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <div class="form-input-material">
        <label for="matricula">Matricula</label>
        <input type="text" name="matricula" id="matricula" placeholder=" " autocomplete="off" class="form-control-material" required />
      </div>
      <div class="form-input-material">
        <label for="nombre">Nombre</label>
        <input type="nombre" name="nombre" id="nombre" placeholder=" " autocomplete="off" class="form-control-material" required />
      </div>
      <div class="form-input-material">
        <label for="apellido">Apellido</label>
        <input type="apellido" name="apellido" id="apellido" placeholder=" " autocomplete="off" class="form-control-material" required />
      </div>
      <div class="form-input-material">
        <label for="edad">Edad</label>
        <input type="edad" name="edad" id="edad" placeholder=" " autocomplete="off" class="form-control-material" required />   
      </div>
      <div class="form-input-material">
        <label for="universidad">Universidad</label>
        <input type="universidad" name="universidad" id="universidad" placeholder=" " autocomplete="off" class="form-control-material" required />
      </div>
       <div class="form-input-material">
        <label for="carrera">Carrera</label>
        <input type="Carrera" name="Carrera" id="Carrera" placeholder=" " autocomplete="off" class="form-control-material" required />
      </div>
      <button type="submit">Enviar</button>
    </form>

    {submitted && (
        <p>
          <strong>{submitted.Matricula}</strong> — {submitted.Nombre} {submitted.Apellidos}, 
          {submitted.Edad} años · {submitted.Universidad} / {submitted.Carrera}
        </p>
      )}

    </>
)
}

export default SimpleForm
