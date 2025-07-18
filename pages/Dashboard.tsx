import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssessmentIcon from '@mui/icons-material/Assessment';

import StatCard from '../components/StatCard.tsx';
import { salesData } from '../data/mock.ts';

const kpiData = [
    { title: "Total Users", value: "1,284", icon: <PeopleIcon sx={{ fontSize: 40 }}/>, change: "+12%" },
    { title: "Revenue", value: "$45,678", icon: <MonetizationOnIcon sx={{ fontSize: 40 }}/>, change: "+8.5%" },
    { title: "New Orders", value: "352", icon: <ShoppingCartIcon sx={{ fontSize: 40 }}/>, change: "-3%" },
    { title: "Conversion Rate", value: "4.8%", icon: <AssessmentIcon sx={{ fontSize: 40 }}/>, change: "+1.2%" },
];

export default function Dashboard() {
  return (
    <Box>
        {/* KPI CARDS */}
        <Grid container spacing={3}>
            {kpiData.map(item => (
                 <Grid xs={12} sm={6} md={3} key={item.title}>
                    <StatCard title={item.title} value={item.value} icon={item.icon} change={item.change} />
                 </Grid>
            ))}
        </Grid>

        {/* SALES CHART */}
        <Paper sx={{ p: 2, mt: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
                Sales Over Time
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    data={salesData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#33335A" />
                    <XAxis dataKey="name" stroke="#B2B2B2" />
                    <YAxis stroke="#B2B2B2" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#23233D',
                            border: '1px solid #D4AF37',
                            color: '#FFFFFF'
                        }}
                    />
                    <Legend wrapperStyle={{ color: '#FFFFFF' }}/>
                    <Bar dataKey="sales" fill="#D4AF37" />
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    </Box>
  );
}