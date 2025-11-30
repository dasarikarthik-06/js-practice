const dfa = {
  q0: { 0: "q1", 1: "q2", isFinal: true },
  q1: { 0: "q3", 1: "q2", isFinal: true },
  q2: { 1: "q3", 0: "q1", isFinal: true },
  q3: { 1: "q3", 0: "q3", isFinal: false },
};

export const isMember = (string) => {
  let currentState = "q0";
  currentState = [...string].reduce((currentState, char) => {
    currentState = dfa[currentState][char];
    return currentState;
  }, currentState);
  return dfa[currentState].isFinal;
};
