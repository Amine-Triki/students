import  express  from "express";
import { StudentModel } from "../models/student";

const router = express.Router();


router.get('/',async (req, res) => {


try {
   const students = await StudentModel.find();
   res.status(200).send(students); 
} catch (error) {
    res.status(500).send("some thing went wrong");
}
});

router.get('/:id',async (req, res) => {
  const id = req.params.id;
const student = await StudentModel.findById(id);
if (!student) {
   res.status(404)
}
res.send(student);
}); 

router.post('/', async (req, res) => {

  try {
      const data = req.body;
  const newStudent = await StudentModel.create(data);
  newStudent.save();
  res.status(201).send(newStudent);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
const student = await StudentModel.findByIdAndUpdate(id , data, { new: true });
if (!student) {
   /* return */ res.status(404).send("Student not found");
}
res.send(student);
}); 

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
const student = await StudentModel.findByIdAndDelete(id);
if (!student) {
    /* return */ res.status(404).send("Student not found");
}
res.send("okay");
}); 

export default router;