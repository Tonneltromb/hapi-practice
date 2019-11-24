const DATA = [
  ['a1','b1', 'c1'],
  ['a2','b2', 'c2'],
];
const SquadStoreService = {
  getSquad: async (squadNumber: number) => {
    return DATA[squadNumber];
  }
};
export default SquadStoreService;
