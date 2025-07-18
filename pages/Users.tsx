import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockUsers } from '../data/mock.ts';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const columns: GridColDef[] = [
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 80,
        renderCell: (params) => <Avatar src={params.value as string} />,
        sortable: false,
        filterable: false,
    },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    { field: 'email', headerName: 'Email', flex: 1.5, minWidth: 200 },
    {
        field: 'role',
        headerName: 'Role',
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value as string}
                color={params.value === 'Admin' ? 'primary' : 'secondary'}
                size="small"
                sx={{
                    color: params.value === 'Admin' ? '#1A1A2E' : undefined,
                    fontWeight: 600
                }}
            />
        )
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value as string}
                color={params.value === 'Active' ? 'success' : 'error'}
                variant="outlined"
                size="small"
            />
        )
    },
    { field: 'lastLogin', headerName: 'Last Login', width: 180 },
];


export default function Users() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">User Management</Typography>
        <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
        >
          Add User
        </Button>
      </Box>

      <Box sx={{ height: 600, width: '100%' }}>
         <DataGrid
            rows={mockUsers}
            columns={columns}
            pageSizeOptions={[10, 25, 50]}
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
            disableRowSelectionOnClick
            sx={{
                border: 'none',
                '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #33335A',
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: '#1A1A2E',
                    borderBottom: '1px solid #D4AF37',
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: '1px solid #33335A',
                }
            }}
         />
      </Box>
    </Box>
  );
}