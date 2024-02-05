import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"   

function StudentView(){
    const[students, setStudents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/rest_api/public/api/students');
                setStudents(response.data.students);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
    
        fetchData();
      }, []);
      
    var studentsDetails = "";
    studentsDetails = students.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.username}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
                <td>{item.score}</td>
                <td>
                    <Link to="/" className="btn btn-primary">Edit</Link>
                    <button type="button" className="btn btn-danger"  style={{margin: "10px"}}>Delete</button>
                </td>
            </tr>
        )
    })

    return(
        <div className="content-wrapper mt-3">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h3>Students List</h3>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/student/create" type="button" class="btn btn-primary" style={{float: "right"}}>Add Student</Link>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="content mt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Students
                                    </h3>
                                </div>
                               
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th width="20%">Username</th>
                                                <th width="20%">Course</th>
                                                <th width="20%">Age</th>
                                                <th width="20%">Sccore</th>
                                                <th width="20%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {studentsDetails}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudentView