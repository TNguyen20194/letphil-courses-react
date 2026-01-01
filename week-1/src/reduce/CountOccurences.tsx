import ProblemCard from "../components/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      {/*
      const result = {};
      const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

      for(let i = 0; i < words.length;  i++) {

      const word = words[i];

      if(result[word]) {
        result[word] = result[word] + 1;
      } else {
        result[word] = 1;
        }
      }

      result = {"apple": 3, "banna": 2, "orange": 1}
       */}
      <div>
        {
          JSON.stringify(
            words.reduce((acc, curr) => {
              console.log("acc: ", acc, "curr: ", curr, "acc[curr]: ", acc[curr])
              // Get current count, or 0 if missing, then add 1
              acc[curr] = (acc[curr] || 0) + 1;
              return acc;
              // "Record" type defines an object with keys and and values of a specific type
            }, {} as Record<string, number>)
          )
        }
      </div>
    </ProblemCard>
  );
};
