import { useContext, useState } from "react";
import { DataContext } from "../hook/dataContext";
import StudentItem from "../component/StudentItem";

function Header() {
  const { studentsData, setStudentsData } = useContext(DataContext);
  const [students, setStudents] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [listToggle, setListToggle] = useState(false);

  const changeHandelar = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      const as = studentsData.filter((student) =>
        student.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      
        setStudents(as);
        setListToggle(true)
    } else {
        setStudents("");
        setListToggle(false)
    }
  };
  return (
    <header className="">
      <nav className="container relative flex justify-center items-center h-20">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={changeHandelar}
            placeholder="search here"
            className="bg-slate-200 border border-main focus:outline-none rounded px-2 py-1 w-60 sm:w-72 md:w-96"
          />
          {listToggle && (
            <div className="absolute top-10 left-0 w-full bg-main p-4 rounded shadow-lg">
              {students.length > 0 && <StudentItem students={students} />}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
