import { useEffect, useState } from "react";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

type UserType = User[];

export const ApiCopy = () => {
  const API = "https://randomuser.me/api/?results=10";

  const [users, setUserData] = useState<UserType>([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(API);
        if (!response.ok) throw new Error("Data not found");

        const data = await response.json();

        console.log(data.results);

        if (!data.results) {
          setUserData([]);
          return;
        }

        setUserData(data.results);

        setLoading(false);
      } catch (err) {
        setError(true);
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API]);

  if (loading) {
    return (
      <div className="text-blue-400 font-medium text-[20px]">
        Loading users...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-400 font-medium text-[20px]">Error getting user data</div>;
  }

  return (
    <>
      {users.map((user) => {
        const fullName = `${user.name.first} ${user.name.last}`;
        const gender =
          user.gender.charAt(0).toLocaleUpperCase() + user.gender.slice(1);

        return (
          <div
            key={fullName}
            className="grid grid-cols-2 mb-3 px-3 py-3 bg-blue-500 rounded-[12px] text-[16px] hover:bg-blue-500/90"
          >
            <div>
              <span className="font-semibold">Name:</span> {fullName}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {gender}
            </div>
          </div>
        );
      })}
    </>
  );
};
