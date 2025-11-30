const dfa = {
  q0: { 0: "q1", isFinal: true },
  q1: { 0: "q2", isFinal: false },
  q2: { 0: "q3", isFinal: true },
  q3: { 0: "q4", isFinal: true },
  q4: { 0: "q5", isFinal: true },
  q5: { 0: "q0", isFinal: false },
};

export const isMember = (string) => {
  let currentState = "q0";
  currentState = [..." ".repeat(string.length)].reduce(
    (previousState, currentState) => {
      currentState = dfa[previousState][0];
      return currentState;
    },
    currentState,
  );
  return dfa[currentState].isFinal;
};
