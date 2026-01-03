import ProblemCard from '../components/ProblemCard';

interface User {
  id: number,
  name: string,
  role: "admin" | "user"
}

export const GroupUsers = () => {
  const users : User[] = [
    { id: 1, name: "Ava", role: "admin" },
    { id: 2, name: "Noah", role: "user" },
    { id: 3, name: "Mia", role: "user" },
  ];

/* Output:
acc = {
  admin: [
    {"id":1, "name": "Ava", "role": "admin"}
  ],
  user: [
    {"id":2, "name": "Noah", "role": "user"},
    {"id":3, "name": "Mia", "role": "user"},
  ]
}
*/

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
          {
          Object.entries(users.reduce((acc, user) => {
            const role = user.role;
            console.log(acc, role)

            //Initial object acc = {} is empty
            /*
            > Run a check and get the value store inside the "role" key -> acc[role]
            > if "role" key doesn't exist, create  it as an empty array
            > acc = {role: []}
            > if already exists, keep it
            > then add new user to the same key(role) group
            */
            acc[role] = acc[role] || [];
            acc[role].push(user);

            console.log(acc)
            return acc;
            /* Record type describes an object
            -where every key is a string
            -every valus is an array of User object
            */
          }, {} as Record<string, User[]>
          )).map(([role, list]) => {
            console.log("Role is:", role, "List of users: ", list)
            return (
              <div key={role}>
                <strong>{role}</strong>
                {list.map((person) => (
                  <div key={person.id}>
                    {person.name}
                  </div>
                ))}
              </div>
            )
          })
          }
      </div>
    </ProblemCard>
  );
}


