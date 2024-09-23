// src/pages/index.tsx
import Layout from "../components/layout";
import { Typography, Box } from "@mui/material";

const DashboardPage = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your dashboard! Here you can manage your content, view reports, and perform other administrative tasks.
        </Typography>
      </Box>
    </Layout>
  );
};

export default DashboardPage;
