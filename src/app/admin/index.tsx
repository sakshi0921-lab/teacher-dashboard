"use client";
import { useState } from "react";
import { Box, Button, Typography, useTheme, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Layout from "../../components/layout";  

interface TeamMember {
  id: number;
  name: string;
  age: number;
  phone: string;
  email: string;
  accessLevel: string;
}

const mockDataTeam: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Priyanka Singh",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    accessLevel: "admin",
  },
  // Add more mock data here if needed
];

const Team = () => {
  const theme = useTheme();
  const [rows, setRows] = useState<TeamMember[]>(mockDataTeam);
  const [openDialog, setOpenDialog] = useState(false);
  const [newAdmin, setNewAdmin] = useState<TeamMember>({
    id: rows.length + 1,
    name: "",
    age: 0,
    phone: "",
    email: "",
    accessLevel: "admin",
  });

  const handleOpenDialog = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAdmin = () => {
    setRows((prev) => [...prev, { ...newAdmin, id: rows.length + 1 }]);
    setNewAdmin({
      id: rows.length + 1,
      name: "",
      age: 0,
      phone: "",
      email: "",
      accessLevel: "admin",
    });
    handleClose();
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                row.accessLevel === "admin"
                  ? theme.palette.success.dark
                  : row.accessLevel === "manager"
                  ? theme.palette.success.main
                  : theme.palette.success.light,
              borderRadius: "5px",
              marginTop: "8px",
            }}
          >
            {row.accessLevel === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {row.accessLevel === "manager" && <SecurityOutlinedIcon />}
            {row.accessLevel === "user" && <LockOpenOutlinedIcon />}
            <Typography color={theme.palette.common.black} sx={{ ml: "5px" }}>
              {row.accessLevel}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Layout>
      <Box m="20px">
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Add Admin
        </Button>

        {/* DataGrid */}
        <Box
          m="40px 20px 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { 
              border: "none",
              backgroundColor: "#43d952",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              backgroundColor: "grey",
            },
            "& .name-column--cell": {
              color: "black",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "white",
              color: "white",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#9edba4",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "white",
            },
            "& .MuiCheckbox-root": {
              color: "white",
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>

        {/* Dialog for adding admin */}
        <Dialog
          open={openDialog}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: "black", // Change dialog background color
              color: "white", // Change text color inside the dialog
            },
          }}
        >
          <DialogTitle sx={{ color: "white" }}>Add New Admin</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              name="name"
              value={newAdmin.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                sx: { color: "white" }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "lightgray", // Border color on hover
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Age"
              name="age"
              type="number"
              value={newAdmin.age}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                sx: { color: "white" }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "lightgray", // Border color on hover
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Phone"
              name="phone"
              value={newAdmin.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                sx: { color: "white" }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "lightgray", // Border color on hover
                  },
                },
              }}
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              value={newAdmin.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              InputProps={{
                sx: { color: "white" }, // Text color
              }}
              InputLabelProps={{
                sx: { color: "white" }, // Label color
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "lightgray", // Border color on hover
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddAdmin} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default Team;
