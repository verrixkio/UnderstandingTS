enum Role {ADMIN, READ, EDIT}

const person = {
    name: 'Thomas',
    age: 27,
    hobbies: ['yo', 3],
    role: Role.ADMIN
};

for (const item in person) {
  console.log("🚀 ~ file: app.ts ~ line 11 ~ typeof(item)", typeof(item))
  console.log(person[item])
}

if (person.role === Role.ADMIN) {
  console.log("admin baby")
}