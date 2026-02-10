import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Andrew Malubag" age={21} isStudent={true} />
      <Student name="Camela Kim Arcalas" age={21} isStudent={true} />
      <Student name="Vince Bautista" age={22} isStudent={false} />
      <Student name="Kristopher Pasaron" age={21} isStudent={false} />
      
      {/* Default Props */}
      <Student />
    </>
  );
}

export default App