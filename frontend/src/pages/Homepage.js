import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/schoolStudent.jpg";
import { BlueButton, LightPurpleButton, PurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%',marginTop:'50px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            {/* Welcome to */}
                            Simple😁School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                        Welcome to Simple School Management System – where education meets efficiency and simplicity. Our school management system is Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.<br/>
                            
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <BlueButton variant="contained" fullWidth>
                                    Login
                                </BlueButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <PurpleButton variant="outlined" fullWidth
                                    sx={{ mt: 3, mb: 3, color: "#7f56da", borderColor: "#7f56da", }}
                                >
                                    Login as Guest
                                </PurpleButton>
                            </StyledLink>
                            <StyledText>
                                First Time🙋🏻‍♂️🙋🏻‍♀️{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
