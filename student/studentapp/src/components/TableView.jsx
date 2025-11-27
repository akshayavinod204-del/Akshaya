import axios from "axios";
import React, { useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Navigate } from "react-router-dom";

const TableView = () => {
    var [Student, setstudent] = useState([]);
    axios.get("http://localhost:3000/view").then((res) => {
        console.log(res.data);
        setstudent(res.data);
    });

    const deletefunction = (id) => {
        console.log(id);
        axios.delete("http://localhost:3000/remove/" + id).then((res) => {
            alert(res.data);
        });

    const updatefunction = (data) => {
        Navigate("/s", { state: data });
    }

        return (
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">id</TableCell>
                                <TableCell align="right">name</TableCell>
                                <TableCell align="right">age</TableCell>
                                <TableCell align="right">department</TableCell>
                                <TableCell align="right">password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Student.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.age}</TableCell>
                                        <TableCell>{val.department}</TableCell>
                                        <TableCell>{val.password}</TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => {
                                                deletefunction(val._id);
                                            }}
                                        >
                                            delete
                                        </Button>




                                         <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => {
                                                updatefunction(val._id);
                                            }}
                                        >
                                            update
                                        </Button>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    };
};
export default TableView;
