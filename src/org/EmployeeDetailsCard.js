// import React from "react";
// import CloseIcon from '@mui/icons-material/Close';
// import { Box, Typography, Button, Avatar } from "@mui/material";

// const styles = {
//     card: {
//         position: "absolute",
//         top: "60px",
//         left: "0",
//         width: "25%",
//         height: "75%",
//         padding: "2rem",
//         margin: "2rem",
//         backgroundColor: "#fef9ef",
//         borderRadius: "1rem",
//         border: "1px solid #d3d3d3",
//         overflowY: "scroll",
//     },
//     cardCloseBtn: {
//         position: "absolute",
//         top: "10px",
//         right: "10px",
//         width: "30px",
//         height: "30px",
//         color: "#227c9d",
//         backgroundColor: "#fef9ef",
//         borderRadius: "50%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         border: "2px solid #227c9d",
//         cursor: "pointer",
//     },
//     // card::-webkit-scrollbar: {
//     //   display: none;
//     // },
//     cardHeader: {
//         textAlign: "center",
//         marginBottom: "1rem",
//     },
//     cardImg: {
//         width: "120px",
//         borderRadius: "1rem",
//     },
//     cardName: {
//         marginTop: "1rem",
//         fontSize: "1.5rem",
//         fontWeight: "bold",
//     },
//     cardRole: {
//         margin: "1rem 0",
//         fontSize: "1.2rem",
//     },
//     cardBody: {
//         marginTop: "1rem",
//         display: "flex",
//         justifyContent: "space-evenly",
//         flexDirection: "column",
//     },
//     cardBodyTeamMembers: {
//         marginTop: "1rem",
//         height: "26vh",
//         overflowY: "scroll",
//     },
//     cardItem: {
//         width: "100%",
//         margin: "0.5rem 0",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//         alignItems: "center",
//         fontSize: "0.9rem",
//     },
//     cardItemLabel: {
//         margin: "0.5rem 0",
//         fontWeight: "bold",
//     },
//     cardItemValue: {
//         textAlign: "justify",
//     },
//     cardItemTeam: {
//         width: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "flex-start",
//     },
//     cardItemImg: {
//         width: "50px",
//         height: "50px",
//         margin: "0.2rem",
//         borderRadius: "50%",
//     },
//     cardItemName: {
//         marginLeft: "0.5rem",
//         fontWeight: "bold",
//     },
//     cardItemRole: {
//         fontSize: "0.8rem",
//         marginLeft: "0.5rem",
//     },
// };

// const EmployeeDetailsCard = (props) => {
//     console.log('cardDetails comp :', props);
//     console.log('cardDetails comp team :', props.employees[0].team);

//     return (
//         <div style={styles.card}>
//             <button style={styles.cardCloseBtn} onClick={props.handleClose}>
//                 <CloseIcon />
//             </button>

//             {props.employee.team === "" ? (

//                 <div>

//                     <div style={styles.cardHeader}>
//                         <img
//                             style={styles.cardImg}
//                             src={props.employee.imageUrl}
//                             alt="Profile"
//                         />
//                         <h2 style={styles.cardName}>{props.employee.name}</h2>
//                         <p cstyle={styles.cardRole}>{props.employee.positionName}</p>
//                     </div>

//                     <div style={styles.cardBody}>
//                         <div style={styles.cardItem}>
//                             <p style={styles.cardItemLabel}>Phone:</p>
//                             <p style={styles.cardItemValue}>{props.employee.phone}</p>
//                         </div>
//                         <div style={styles.cardItem}>
//                             <p style={styles.cardItemLabel}>Email:</p>
//                             <p style={styles.cardItemValue}>{props.employee.email}</p>
//                         </div>
//                         <div style={styles.cardItem}>
//                             <p style={styles.cardItemLabel}>Position:</p>
//                             <p style={styles.cardItemValue}>{props.employee.positionName}</p>
//                         </div>
//                         {props.employee.department && (
//                             <div style={styles.cardItem}>
//                                 <p style={styles.cardItemLabel}>Department:</p>
//                                 <p style={styles.cardItemValue}>{props.employee.department}</p>
//                             </div>
//                         )}
//                     </div>

//                 </div>
//             )
//                 :
//                 (
//                     <div>
//                         <div style={styles.cardHeader}>
//                             <h2>{props.employee.team} Team</h2>
//                         </div>
//                         <h4>Team Members:</h4>
//                         <div style={styles.cardBodyTeamMembers}>
//                             {props.employees
//                                 .filter(
//                                     (employee) => employee.parentId === props.employee.id
//                                 )
//                                 .map((employee) => (
//                                     <div style={styles.cardItemTeam} key={employee.id}>
//                                         <img
//                                             style={styles.cardItemImg}
//                                             src={employee.imageUrl}
//                                             alt="Profile"
//                                         />
//                                         <p style={styles.cardItemName}>{employee.name}</p>
//                                         <p style={styles.cardItemRole}>{employee.positionName}</p>
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 )}

//         </div>
//     );
// };

// export default EmployeeDetailsCard;



import React from 'react';
import { Box, Typography, Button, Avatar, Grid, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EmployeeCard = (props) => {
    return (
        <Paper elevation={3} sx={{ position: "absolute", top: "60px", left: "0", width: { xs: '65%', xl: '25%', lg: '25%', md: '30%' }, height: "auto",minHeight:'50%', p: 4, m: 4, backgroundColor: "#fef9ef", borderRadius: 2, overflowY: "scroll", border: "1px solid #d3d3d3" }}>
            <Button
                sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "30px",
                    height: "30px",
                    color: "#227c9d",
                    backgroundColor: "#fef9ef",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid #227c9d",
                    cursor: "pointer",
                    minWidth: "unset"
                }}
                onClick={props.handleClose}
            >
                <CloseIcon />
            </Button>

            {props.employee.team === "" ? (
                <Box>
                    <Box display={'flex'} justifyContent={'center'} mb={2}>
                        <Avatar
                            sx={{ width: 120, height: 120, borderRadius: 1, mb: 2 }}
                            src={props.employee.imageUrl}
                            alt="Profile"
                        />
                    </Box>
                    <Box textAlign={'center'} mb={3}>
                        <Typography variant="h5" fontWeight="bold">
                            {props.employee.name}
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            {props.employee.positionName}
                        </Typography>
                    </Box>
                    <Grid container spacing={2} display={'flex'} justifyContent={'center'}>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                Phone:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="body2">{props.employee.phone}</Typography>
                        </Grid>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                Email:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="body2">{props.employee.email}</Typography>
                        </Grid>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                Position:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} xl={6} lg={6} md={6}>
                            <Typography variant="body2">{props.employee.positionName}</Typography>
                        </Grid>
                        {props.employee.department && (
                            <>
                                <Grid item xs={12} xl={6} lg={6} md={6}>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        Department:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} xl={6} lg={6} md={6}>
                                    <Typography variant="body2">{props.employee.department}</Typography>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            ) : (
                <Box>
                    <Typography variant="h5" textAlign="center">
                        {props.employee.team} Team
                    </Typography>
                    <Typography variant="h6" mt={2}>
                        Team Members:
                    </Typography>
                    <Grid container spacing={2} mt={2} sx={{ height: "26vh", overflowY: "scroll" }}>
                        {props.employees
                            .filter((employee) => employee.parentId === props.employee.id)
                            .map((employee) => (
                                <Grid item xs={12} key={employee.id} container alignItems="center">
                                    <Avatar
                                        sx={{ width: 50, height: 50, mr: 2 }}
                                        src={employee.imageUrl}
                                        alt="Profile"
                                    />
                                    <Box>
                                        <Typography variant="body1" fontWeight="bold">
                                            {employee.name}
                                        </Typography>
                                        <Typography variant="body2">{employee.positionName}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>
                </Box>
            )}
        </Paper>
    );
};

export default EmployeeCard;
