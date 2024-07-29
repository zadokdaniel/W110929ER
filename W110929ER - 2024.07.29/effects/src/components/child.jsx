import { useEffect, useState } from "react";

let counterIntervals = 1;

let renderCounter = 0;

function Child(props) {
  const [counter, setCounter] = useState(0);

  const label = `Render ${renderCounter++}`;
  console.groupCollapsed(label);

  useEffect(() => {
    console.log("#1 (CDU) Component Did Update");

    return () => console.log("#1cu (CDU) - clean up");
  });

  useEffect(() => {
    console.log("#2 (CDM) Component Did Mount");

    return () =>
      console.log("#2cu (CWU) Component Will Unmount - CDM clean up ");
  }, []);

  useEffect(() => {
    console.log(`#3 (CDU) Component Did Update - [counter] => [${counter}]}`);

    return () => {
      console.log(
        `#3cu (CDU) Component Did Update - [counter] => [${counter}]}`
      );
    };
  }, [counter]);

  // useEffect(() => {
  //   console.log(
  //     `(CDU) Component Did Update - [props.parentCounter, counter] => [${[
  //       props.parentCounter,
  //       counter,
  //     ]}]`
  //   );
  // }, [props.parentCounter, counter]);

  // useEffect(() => {
  //   const id = crypto.randomUUID();
  //   const c = counterIntervals++;
  //   setInterval(() => {
  //     console.log(`timeout ${id} - ${c}`);
  //   }, 1000);

  //   return () => {
  //     console.log("helepo");
  //   };
  // }, []);

  console.log("render");

  useEffect(() => {
    () => console.groupEnd(label);
  });

  return (
    <div>
      <h1>Child</h1>
      <button
        className="btn btn-primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        {counter}
      </button>

      <div>
        <h3>props</h3>
        <pre className="fs-2">{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Child;

/**
 *
 * 1. create a new project with bootstrap
 * 2. in app create a button to show or hide the component WindowSize
 * 3. the component windowSize will show the size of the window
 * 4. take the logic for showing the window size into a seperate custom hook
 */
