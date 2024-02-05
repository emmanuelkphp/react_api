import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Student from '../pages/student/view';
import StudentCreate from '../pages/student/Create'

function MyRouter(){
    return(
       <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about-us' element={<About></About>}></Route>
            <Route path='/contact-us' element={<Contact></Contact>}></Route>
            <Route path='/students' element={<Student></Student>}></Route>
            <Route path='/student/create' element={<StudentCreate></StudentCreate>}></Route>
       </Routes>
    );
}

export default MyRouter;