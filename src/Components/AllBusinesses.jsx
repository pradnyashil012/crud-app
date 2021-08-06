import { Table, TableRow, TableHead, TableBody, TableCell, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getBusinesses, deleteBusiness } from "../Service/api";
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },

    thead: {
        '& > *': {
            background: '#000000',
            color: '#ffffff',
            fontSize: 17
        }
    },

    row: {
        '& > *': {
            fontSize: 16
        }
    }
})

const AllBusinesses = () => {

    const classes = useStyles();

    const [businesses, setBusiness] = useState([]);

    useEffect(() => {
        getAllBusinesses();
    }, []);

    const getAllBusinesses = async () => {
        const response = await getBusinesses();
        
        setBusiness(response.data);
    }

    const deleteBusinessData = async (id) => {
        await deleteBusiness(id);
        getAllBusinesses();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Sorting</TableCell>
                    <TableCell>Followers</TableCell>
                    <TableCell>Edit/Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    businesses.map(business => {
                        return (
                            <TableRow className={classes.row}>
                                <TableCell>{business.id}</TableCell>
                                <TableCell>{business.name}</TableCell>
                                <TableCell>{business.sorting}</TableCell>
                                <TableCell>{business.followers}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${business.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteBusinessData(business.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default AllBusinesses;