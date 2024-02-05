import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function StudentCreate(){
    const navigate = useNavigate();
    const[errors, setErrors] = useState([]);
    const[student, setStudents] =  useState({
        username: '',
        course: '',
        age: '',
        score: ''
    })

    const handleInput = (event) => {
        event.persist();
        setStudents({...student, [event.target.name]: event.target.value});
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost/rest_api/public/api/students/create', student);
          
            if(response.data.status != 200){
                setErrors(response.data.errors);
                return;    
            }
            
            navigate("/students");

        } catch (error) {

            console.error('Error making POST request:', error.message);
        }
    };

    return(
        <div className="content-wrapper mt-3">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        {/* <div className="col-sm-6">
                            <h4>Add Student</h4>
                        </div> */}
                    </div>
                </div>
            </section>
            
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-header">
                            <h3 className="card-title">Add Student</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" >
                                    <i className="fas fa-minus" />
                                </button>
                                
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="text" name="username" value={student.name} className="form-control"  placeholder="Name" onChange={handleInput}></input>
                                    <span className={errors && errors.username ? "text-danger" : "d-none"}>
                                        <strong>{errors.username}</strong>
                                    </span>
                                </div>
                                
                                <div className="col-md-6">
                                    <label for="course" className="form-label">Course</label>
                                    <input type="text" name="course" value={student.course} className="form-control" placeholder="Course" onChange={handleInput}></input>
                                    <span className={errors && errors.course ? "text-danger" : "d-none"}>
                                        <strong>{errors.course}</strong>
                                    </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mt-2">
                                    <label for="age" className="form-label">Age</label>
                                    <input type="number" name="age" value={student.age} className="form-control" placeholder="Name" onChange={handleInput}></input>
                                    <span className={errors && errors.age ? "text-danger" : "d-none"}>
                                        <strong>{errors.age}</strong>
                                    </span>
                                </div>
                                
                                <div className="col-md-6 mt-2">
                                    <label for="score" className="form-label">Score</label>
                                    <input type="number" name="score" value={student.score} className="form-control" placeholder="Course" onChange={handleInput}></input>
                                    <span className={errors && errors.score ? "text-danger" : "d-none"}>
                                        <strong>{errors.score}</strong>
                                    </span>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <button className="btn btn-warning" onClick={handleSubmit}>Submit</button>
                                    <Link className="btn btn-secondary" to={"/students"} style={{margin: "5px"}}>Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </section>
        </div>       
    )
}

export default StudentCreate