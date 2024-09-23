import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from "@mui/x-data-grid";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../../components/layout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface RowModel {
  id: number;
  trn: string;
  school: string;
  course: string;
  department: string;
}

const Application = () => {
  const theme = useTheme();

  const [rows, setRows] = useState<GridRowsProp<RowModel>>([
    { id: 1, trn: "TRN001", school: "MRIIRS", course: "Algebra", department: "SCA" },
    { id: 2, trn: "TRN002", school: "MRU", course: "Electrical Engineering", department: "SCA" },
    { id: 3, trn: "TRN003", school: "MRDC", course: "Civil Engineering", department: "Psychology" },
    { id: 4, trn: "TRN004", school: "MRDC", course: "Algebra", department: "Mathematics" },
    // Add more rows as needed
  ]);

  const [newRow, setNewRow] = useState<Omit<RowModel, "id">>({
    trn: "",
    school: "",
    course: "",
    department: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [rowToDelete, setRowToDelete] = useState<number | null>(null);

  const handleAddRow = () => {
    if (newRow.trn && newRow.course) {
      setRows((prevRows) => [
        ...prevRows,
        { id: prevRows.length + 1, ...newRow },
      ]);
      setNewRow({ trn: "", school: "", course: "", department: "" });
    }
  };

  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    setOpenDialog(false);
  };

  const confirmDelete = (id: number) => {
    setRowToDelete(id);
    setOpenDialog(true);
  };

  const handleEditRow = (id: number) => {
    const rowToEdit = rows.find((row) => row.id === id);
    if (rowToEdit) {
      setNewRow({
        trn: rowToEdit.trn,
        school: rowToEdit.school,
        course: rowToEdit.course,
        department: rowToEdit.department,
      });
    }
  };

  const columns: GridColDef[] = [
    { field: "trn", headerName: "TRN Number", flex: 1, cellClassName: "custom-cell" },
    { field: "school", headerName: "School", flex: 1, cellClassName: "custom-cell" },
    { field: "course", headerName: "Course", flex: 1, cellClassName: "custom-cell" },
    { field: "department", headerName: "Department", flex: 1, cellClassName: "custom-cell" },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params: GridRenderCellParams<RowModel>) => (
        <IconButton onClick={() => handleEditRow(params.row.id)} sx={{ color: "#e39b98" }}>
          <EditIcon />
        </IconButton>
      ),
      flex: 0,
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params: GridRenderCellParams<RowModel>) => (
        <IconButton onClick={() => confirmDelete(params.row.id)} sx={{ color: "#53f579" }}>
          <DeleteIcon />
        </IconButton>
      ),
      flex: 0,
    },
  ];

  return (
    <Layout>
      <Box sx={{ padding: 1, backgroundColor: "#acb0b0", color: "#22dfe6" }}>
        <Box sx={{ marginBottom: 1,height:100 }}>
          <TextField
            label="TRN Number"
            value={newRow.trn}
            onChange={(e) => setNewRow({ ...newRow, trn: e.target.value })}
            sx={{ marginRight: 1 }}
          />
          <TextField
            label="School"
            value={newRow.school}
            onChange={(e) => setNewRow({ ...newRow, school: e.target.value })}
            sx={{ marginRight: 1 }}
          />
          <TextField
            label="Course"
            value={newRow.course}
            onChange={(e) => setNewRow({ ...newRow, course: e.target.value })}
            sx={{ marginRight: 1 }}
          />

          <TextField
            label="Department"
            value={newRow.department}
            onChange={(e) => setNewRow({ ...newRow, department: e.target.value })}
            sx={{ marginRight: 1 }}
          />
          <Button variant="contained" onClick={handleAddRow}  style={{
    marginTop: '12px',
    color: '#fff',
  }}>
            Add 
          </Button>
        </Box>

        <Box
          sx={{
            height: 400,
            width: "100%",
            "--column-header-color": theme.palette.mode === "dark" ? "#556cd6" : "#1976d2",
            "--cell-text-color": theme.palette.text.primary,
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "var(--column-header-color)",
            },
            "& .MuiDataGrid-cell": {
              color: "var(--cell-text-color)",
              backgroundColor: "#606363",
            },
            "& .custom-cell": {
              backgroundColor: "#606363",
              color: "white",
            },
          }}
        >
          <DataGrid rows={rows} columns={columns} />
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{"Confirm Delete"}</DialogTitle>
          <DialogContent>
            <DialogContentText>Are you sure you want to delete this entry?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>No</Button>
            <Button
              onClick={() => rowToDelete !== null && handleDeleteRow(rowToDelete)}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Application;
