const DATA = [
  ['a1','b1', 'c1'],
  ['a2','b2', 'c2'],
];
const SquadStoreService = {
  getSquad: async (squadNumber: number) => {
    return DATA[squadNumber];
  },
  getDutySquad: async () => ['duty1', 'duty2', 'duty3'],
};
export default SquadStoreService;
