// src/components/layout.tsx
/*import { ReactNode } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex">
        <Sidebar />
        
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Topbar />

          <Box p={3}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;*/
// src/components/layout.tsx
/*"use client"
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ThemeWrapper } from "./ThemeToggle"; // Updated import

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeWrapper> 
      <Box display="flex">
        <Sidebar />
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Topbar />
          <Box p={3}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeWrapper>
  );
};

export default Layout;
*/
// src/app/layout.tsx
/*"use client";

import React from 'react';
import { ThemeContextProvider } from '../context/ThemeContext';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <Sidebar />
            <Topbar />
            {children}
        </ThemeContextProvider>
    );
};

export default Layout;*/
"use client"
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ThemeWrapper } from "./ThemeToggle"; // Updated import

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeWrapper> {/* Use ThemeWrapper to wrap the whole layout */}
      <Box display="flex">
        <Sidebar />
        <Box flexGrow={1} display="flex" flexDirection="column">
          <Topbar />
          <Box p={3}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeWrapper>
  );
};

export default Layout;

