/* eslint-disable react/prop-types */
import * as R from "ramda";
import { EachBox } from "./EachBox";

export const Layout = (props) => {
  //   const { numOfPlayers } = props;
  // const { updateMistake } = props;
  // console.log("props", updateMistake);  
  const renderBoxes = (props) => {
    const { updatedState, mistake, updateMistake} = props;
    console.log(props, updateMistake, mistake, "props")
    return R.pipe(
      R.splitEvery(10),
      R.addIndex(R.map)((row, index) => {
        return (
          <div className="box-row" key={index}>
            {R.map((box) => {
              return (
                <div key={box} className="box">
                  <span>
                    <EachBox
                      boxIndex={box}
                      updatedState={updatedState}
                      numOfPlayers={updatedState.numOfPlayers}
                      mistake={mistake}
                      updateMistake={updateMistake}
                    />
                  </span>
                </div>
              );
            }, row)}
          </div>
        );
      })
    )(R.range(1, 101));
  };
  return <div className="board">{renderBoxes(props)}</div>;
};
