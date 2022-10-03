console.clear();
const user = [
  {
    id: 1,
    name: "shibi",
    age: 16,
  },
  {
    id: 2,
    name: "suriya",
    age: 20,
  },
  {
    id: 3,
    name: "sasi",
    age: 56,
  },
];
const usersHashMap = user.reduce((hashMap, user) => {
  const { id } = user;
  hashMap[id] = user;
  return hashMap;
}, {});
console.log(usersHashMap);
