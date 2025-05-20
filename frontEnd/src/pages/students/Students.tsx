import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useState , useEffect} from "react";
import   {createSudent, fetchStudents } from  "../../api/students";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export interface Student {
  name: string;
  year_of_birth: number;
  email: string;
  city: string;
}



const Students = () => {



  useEffect(() => {
fetchStudents().then((data) => {setRows(data)}).catch((error) =>  alert(error));
  }, []);

  const [formCheck, setFormCheck] = useState({
    name: "",
    year_of_birth: "",
    email: "",
    city: "",
  });

  const [rows, setRows] = useState<Student[]>([

  ]);

  

  const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  if (!formCheck.name.trim()) {
    alert("Please enter a name.");
    return;
  }

  // Parse year to number
  const studentData: Student = {
    name: formCheck.name,
    year_of_birth: parseInt(formCheck.year_of_birth),
    email: formCheck.email,
    city: formCheck.city,
  };

  try {
    const data = await createSudent(studentData);
    setRows((prevRows) => [...prevRows, data]);

    // Reset the form
    setFormCheck({
      name: "",
      year_of_birth: "",
      email: "",
      city: "",
    });
  } catch (error) {
    console.error("Error adding student:", error);
    alert("Failed to add student");
  }
};

  
 
  return (
    <main>
      <Container maxWidth="md" sx={{ my: 10 }}>
        <TableContainer component={Paper} sx={{ my: 10 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">name </StyledTableCell>
                <StyledTableCell align="center">year of birth</StyledTableCell>
                <StyledTableCell align="center">email</StyledTableCell>
                <StyledTableCell align="center">city</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.year_of_birth}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">{row.city}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* adding  students */}
        <h3>Add new student</h3>
        <Box
          component="form"
          onSubmit={handleSubmit}
          flex={1}
          textAlign="start"
          sx={{ display: "flex", gap: 2, flexDirection: "column" }}
        >
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            required
            value={formCheck.name}
            onChange={(e) =>
              setFormCheck({ ...formCheck, name: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="year of birth"
            variant="outlined"
            value={formCheck.year_of_birth}
            onChange={(e) =>
              setFormCheck({ ...formCheck, year_of_birth: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="email"
            type="email"
            variant="outlined"
            value={formCheck.email}
            onChange={(e) =>
              setFormCheck({ ...formCheck, email: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="city"
            variant="outlined"
            value={formCheck.city}
            onChange={(e) =>
              setFormCheck({ ...formCheck, city: e.target.value })
            }
          />
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                textTransform: "none",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  cursor: "default",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Students;
