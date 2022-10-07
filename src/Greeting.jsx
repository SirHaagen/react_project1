
export function Greeting() {

  const response = true;
  const persona = { nombre: 'Pepo', edad: 33 };

  const suma = (x, y) => x + y;

  /* Etiqueta vacía se llama FRAGMENT. Usar de acuerdo a la need. No se imprimirá esta etiqueta 
  y es para cumplir con la condición de React para los componentes */
  return <>
    <h1>***Este es un componente***</h1>
    <h1>Sintaxis de JSX</h1>
    <h2>{response ? 'Estoy aprendiendo 😁' : 'Estoy cansado 😅'}</h2>
    <p>La respuesta fue: {response.toString()}</p>
    <p>El objeto es: {JSON.stringify(persona)}</p>
    <p>La persona se llama {persona.nombre} y tiene {persona.edad} años</p>
    <p>{1 + 2}</p>
    <p>{suma(1, 2)}</p>
  </>
}

export function Example(){
  return <>
  <h1>Este es ejemplo</h1></>
}