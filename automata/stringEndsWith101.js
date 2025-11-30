const dfa = {
  q0: { 0: "q0", 1: "q1", isFinal: false },
  q1: { 0: "q2", 1: "q1", isFinal: false },
  q2: { 1: "q3", 0: "q0", isFinal: false },
  q3: { 0: "q0", 1: "q1", isFinal: true },
};

export const isMember = (string) => {
  const currentState = "q0";
  const finalState = [...string].reduce((currentState, char) => {
    currentState = dfa[currentState][char];
    return currentState;
  }, currentState);
  return dfa[finalState].isFinal;
};
