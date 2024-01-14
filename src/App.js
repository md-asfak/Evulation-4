import DisplayComponent from "./Component/DisplayComponent";
import "./App.css";

function App() {
  const Data = [
    {
      Id: 1,
      Name: "Ashfakur",
      Age: 25,
      Course_Name: "Full Stact Dev",
      Institute: "HTGT",
      Traner_Name: "Sir Ayush",
      Mentor_Name: "Sir Ayush",
    },
    {
      Id: 2,
      Name: "Abishek",
      Age: 25,
      Course_Name: "Full Stact Dev",
      Institute: "HTGT",
      Traner_Name: "Sir Ayush",
      Mentor_Name: "Sir Ayush",
    },

    {
      Id: 3,
      Name: "Pradeep",
      Age: 21,
      Course_Name: "Full Stact Dev",
      Institute: "HTGT",
      Traner_Name: "Sir Ayush",
      Mentor_Name: "Sir Ayush",
    },

    {
      Id: 4,
      Name: "Mayur Goutam",
      Age: 25,
      Course_Name: "Full Stact Dev",
      Institute: "HTGT",
      Traner_Name: "Sir Ayush",
      Mentor_Name: "Sir Ayush",
    },
  ];
  return (
    <>
      <DisplayComponent Student={Data} />
    </>
  );
}

export default App;
