
function StudentItem({ students }) {
  return (
    <>
      <ul className="divide-y divide-slate-200">
        {students.map((student) => (
          <li key={student.id} className="text-light py-2">
            {student.name} - {student.add} - {student.phone}
          </li>
        ))}
      </ul>
    </>
  );
}

export default StudentItem;
