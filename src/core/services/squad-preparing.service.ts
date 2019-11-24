const DATA = [
  ['a1','b1', 'c1'],
  ['a2','b2', 'c2'],
];
const SquadPreparingService = {
  prepareSquad: async (squad: string[]) => {
    return squad.map(e => `${e} - ready`);
  }
};
export default SquadPreparingService;
