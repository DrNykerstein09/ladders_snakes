/* eslint-disable react/prop-types */
export const SetPlayers = (props) => {
  const {
    numOfPlayers,
    invalidNumOfPlayers,
    updateNumberOfPlayers,
    showLayout,
  } = props;
  return (
    <div>
      <p>Empiece el juego seleccionando la cantidad de jugadores (Max 4 )</p>
      <div>
        <input
          type="number"
          onChange={updateNumberOfPlayers}
          value={numOfPlayers}
          max="4"
          min="2"
        />
        {invalidNumOfPlayers && (
          <p className="error">Por favor eliga 2 a 4 jugadores</p>
        )}
        <button
          className="m-l-20"
          disabled={invalidNumOfPlayers}
          onClick={showLayout}
        >
          {" "}
          Empezar
        </button>
      </div>
    </div>
  );
};
