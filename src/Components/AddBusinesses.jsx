import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  Button,
  makeStyles,
  Typography,
  Box
} from "@material-ui/core";
import { useState } from "react";
import { addBusiness } from "../Service/api";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    '& > *': {
        marginTop: 20
    }
  },
  typography: {
    margin: "5% 0 0"
  }
});

const initialValues = {
    name: '',
    sorting: '',
    followers: ''
}

const AddBusiness = () => {
  const [business, setBusiness] = useState(initialValues);
  const {name, sorting, followers} = business;
  const classes = useStyles();
  const history = useHistory();

  const onValueChange = (e) => {
        setBusiness({...business, [e.target.name]: e.target.value});
        
  }

  const addBusinessDetails = async () => {
      await addBusiness(business);
      history.push("./all");
  }

  return (
    <Box >
    
      <FormGroup className={classes.container}>
        <Typography className={classes.typography}>
            <h2 align={"center"}>Add Business</h2>
        </Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl>
          <InputLabel>Sorting</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="sorting" value={sorting} />
        </FormControl>
        <FormControl>
          <InputLabel>Followers</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="followers" value={followers} />
        </FormControl>
        <Button variant="contained" onClick={() => addBusinessDetails()} color="primary">Add Business</Button>
      </FormGroup>
    </Box>
  );
};

export default AddBusiness;
