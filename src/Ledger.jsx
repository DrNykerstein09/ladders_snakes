export const Ledger = () => {
  return (
    <div>
      <h2>Instrucciones</h2>
      <ul>
        <li>
          Se abrirá una alerta cuando se pase por una serpiente o escalera
        </li>
        <li>Cuando un jugador cruce 100, el juego terminará</li>
        <li>Una vez que el juego se acabe, se reiniciará el juego</li>
        <li>
          Si el jugador responde mal una pregunta, se debe hacer clic en el
          botón rojo (respuesta incorrecta)
        </li>
        <li>
          Los errores máximos que puede cometer un jugador dependen de la
          dinámica que se establezca
        </li>
        <li>
          Las preguntas aparecerán en conjunto con el autor en cuestión, si se
          tiene dudas de la pregunta puede verse en el botón que dice
          `&quot;`Mostrar respuesta`&quot;`
        </li>
      </ul>
      <div className="ledger-player">
        Jugardor 1 es
        <div className="P1_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Jugardor 2 es
        <div className="P2_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Jugardor 3 es
        <div className="P3_shape m-l-20" />
      </div>
      <div className="ledger-player">
        Jugardor 4 es
        <div className="P4_shape m-l-20" />
      </div>
    </div>
  );
};
