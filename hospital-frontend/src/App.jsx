import { useEffect, useState } from "react";

function App() {

  const API_URL =
    "https://hospital-management-system-opo8.onrender.com";

  const [patients, setPatients] = useState([]);

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    disease: ""
  });

  // GET PATIENTS
  const getPatients = async () => {

    try {

      const res =
        await fetch(`${API_URL}/patients`);

      const data =
        await res.json();

      setPatients(data);

    } catch (error) {

      console.log(error);
    }
  };

  // ADD PATIENT
  const addPatient = async () => {

    try {

      const res =
        await fetch(`${API_URL}/patients`, {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: patient.name,
            age: Number(patient.age),
            disease: patient.disease
          })
        });

      console.log("Status:", res.status);

      if (!res.ok) {

        alert("Patient Add Failed");

        return;
      }

      alert("Patient Added Successfully");

      setPatient({
        name: "",
        age: "",
        disease: ""
      });

      getPatients();

    } catch (error) {

      console.log(error);

      alert("Error");
    }
  };

  useEffect(() => {

    getPatients();

  }, []);

  return (

    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>Hospital Management System</h1>

      <input
        placeholder="Patient Name"
        value={patient.name}
        onChange={(e) =>
          setPatient({
            ...patient,
            name: e.target.value
          })
        }
      />

      <br /><br />

      <input
        placeholder="Age"
        type="number"
        value={patient.age}
        onChange={(e) =>
          setPatient({
            ...patient,
            age: e.target.value
          })
        }
      />

      <br /><br />

      <input
        placeholder="Disease"
        value={patient.disease}
        onChange={(e) =>
          setPatient({
            ...patient,
            disease: e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={addPatient}>
        Add Patient
      </button>

      <h2>Patient List</h2>

      {

        patients.map((p) => (

          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <h3>{p.name}</h3>

            <p>
              Age: {p.age}
            </p>

            <p>
              Disease: {p.disease}
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default App;