import "./App.css";
import Header from "./layout/Header";
import { DataContext } from "./hook/dataContext";
import StudentData from "./data/Student.json";
import { useState } from "react";

function App() {
  const [studentsData, setStudentsData] = useState(StudentData);

  return (
    <>
      <DataContext.Provider value={{ studentsData, setStudentsData}}>
        <Header />
      </DataContext.Provider>
    </>
  );
}

export default App;
