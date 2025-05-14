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

function createData(
  name: string,
  year_of_birth: number,
  email: string,
  city: string
) {
  return { name, year_of_birth, email, city };
}

const rows = [
  createData("lee", 1998, "a@z3cc.cc", "ste"),
  createData("yasuo", 237, "b@z3cc.cc", "us"),
  createData("jinx", 262, "c@z3cc.cc", "uk"),
];

const Students = () => {
  function handleSubmit() {
    throw new Error("Function not implemented.");
  }

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
          <TextField id="outlined-basic" label="name" variant="outlined"  required/>
          <TextField
            id="outlined-basic"
            label="year of birth"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField id="outlined-basic" label="city" variant="outlined" />
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
                      cursor:"default"
                    },
                  }} onClick={handleSubmit}
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
