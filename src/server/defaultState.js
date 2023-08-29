import md5 from "md5";

export const defaultState = {
  /*  session: {
    authenticated: false,
   }, */
  users: [{
    id: "U1",
    name: "Dev",
    passwordHash: md5("TUPLES"),
  },
  {
    id: "U2",
    name: "Victor",
    passwordHash: md5("PROFITING"),
  },
  ],
  groups: [{
    id: "G1",
    name: "To Do",
    owner: "U1",
  },
  {
    id: "G2",
    name: "Doing",
    owner: "U1",
  },
  {
    id: "G3",
    name: "Done",
    owner: "U1",
  }
  ],
  tasks: [{
    id: "T1",
    name: "Do tests",
    group: "G1",
    owner: "U1",
    isComplete: false,
  },
  {
    id: "T2",
    name: "Refactor tests",
    group: "G2",
    owner: "U1",
    isComplete: false,
  },
  {
    id: "T3",
    name: "Meet with CTO",
    group: "G3",
    owner: "U1",
    isComplete: true,
  },
  {
    id: "T4",
    name: "Compile ES6",
    group: "G3",
    owner: "U2",
    isComplete: false,
  },
  {
    id: "T5",
    name: "Update component snapshots",
    group: "G3",
    owner: "U1",
    isComplete: true,
  }
  ],
  comments: [{
    id: "C1",
    owner: "U1",
    task: "T1",
    content: "Great work!",
  }],
};
