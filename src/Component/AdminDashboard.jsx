
import { Box, Typography, styled, Grid, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Marquee from 'react-marquee-slider';

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const CodeForInterview = () => {
  const doctors = [
    { name: 'Dr. Jai Singh', specialty: 'Pediatrics', location: 'New Delhi' },
    { name: 'Dr. Vedant Mishra', specialty: 'Cardiology', location: 'Uttar Pradesh' },
    { name: 'Dr. Badri Nath', specialty: 'Orthopedics', location: 'Uttarakhand' },
  ];

  return (
    <Header>
      <Marquee>
      <div>This is Dummy Data</div>
      <div></div>
    </Marquee>
      <Typography variant="h4">Alpha Care Admin Panel</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Appointments</Typography>
              <Typography variant="body1">50</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Appointments Today</Typography>
              <Typography variant="body1">10</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Speciality</TableCell>
                    <TableCell>Location</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {doctors.map((doctor) => (
                    <TRow key={doctor.name}>
                        <TableCell>{doctor.name}</TableCell>
                        <TableCell>{doctor.specialty}</TableCell>
                        <TableCell>{doctor.location}</TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    </Header>
  );
};

export default CodeForInterview;
