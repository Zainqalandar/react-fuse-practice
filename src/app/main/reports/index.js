import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import formatDate from "../../utils/formateDate";
import {Button, IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "../../components/Dialog";
import TableContainer from "@mui/material/TableContainer";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Reports = () => {
    const [fineReports, setFineReports] = useState(null)
    useEffect(() => {
        const getReportsFine = async () => {
            try {
                const response = await axios.get("report/users/fine");
                // setFineReports(response.data.data)
                setFineReports(Object.values(response.data.data))
                // setLoading(false)
            } catch (error) {
                console.log(error);
            }
        };
        getReportsFine()
    }, []);

    console.log('fineReports', fineReports)

    return (
        <>
            {fineReports?.map((report) => (
                <TableContainer
                    style={{maxWidth: "90%", margin: "0px auto", marginTop: "10px"}}
                    component={Paper}
                >
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead style={{backgroundColor: "rgba(70, 70, 127, 1)"}}>
                            <TableRow>
                                <TableCell style={{fontWeight: "bold", color: "white"}}>
                                    ID
                                </TableCell>
                                <TableCell style={{fontWeight: "bold", color: "white"}}>
                                    NAME
                                </TableCell>
                                <TableCell
                                    style={{fontWeight: "bold", color: "white"}}
                                    align="left"
                                >
                                    TOTAL LATES
                                </TableCell>
                                <TableCell style={{fontWeight: "bold", color: "white"}}>
                                    TOTAL HALF DAYS
                                </TableCell>

                                <TableCell
                                    style={{fontWeight: "bold", color: "white"}}
                                    align="left"
                                >
                                    LESS THEN 8 HORSE
                                </TableCell>
                                <TableCell
                                    style={{fontWeight: "bold", color: "white"}}
                                    align="left"
                                >
                                    TOTAL FORGOT CHECKOUTS
                                </TableCell>
                                <TableCell
                                    style={{fontWeight: "bold", color: "white"}}
                                    align="left"
                                >
                                    TOTAL FINE
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects?.map((project) => (
                                <TableRow
                                    key={project.id}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                >
                                    <TableCell align="left">{project.id}</TableCell>
                                    <TableCell align="left">{project.name}</TableCell>
                                    <TableCell align="left">{project.team.name}</TableCell>
                                    <TableCell align="left">{formatDate(project.start_date)}</TableCell>
                                    <TableCell align="left">{project.number_of_developers}</TableCell>
                                    <TableCell
                                        style={{
                                            display: "flex",
                                            gap: "10px",
                                            alignItems: "center",
                                        }}
                                        align="left"
                                    >
                                        <IconButton
                                            aria-label="edit"
                                            onClick={() => getProject(project.id)}
                                            className={classes.outlinedButton}
                                        >
                                            <EditIcon style={{color: "rgb(70, 70, 127)"}}/>
                                        </IconButton>
                                        <Button
                                            variant="outlined"
                                            onClick={() => deleteProject(project.id)}
                                            startIcon={<DeleteIcon/>}
                                            style={{
                                                color: "rgb(70, 70, 127)",
                                                borderColor: "rgb(70, 70, 127)",
                                            }}
                                        >
                                            DELETE
                                        </Button>
                                        <Dialog code={project.code} description={project.description} project={project.name}
                                                technologyStacks={project.technologyStacks}/>

                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )) }
        </>
    )
}

export default Reports