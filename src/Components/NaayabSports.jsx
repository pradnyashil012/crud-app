
import { Box, makeStyles, Typography } from "@material-ui/core";
import YouTube from "../Assets/Images/youtube.png";
import Insta from "../Assets/Images/insta.png";

const useStyle = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },

    component: {
        margin: 50
    }
})

const NaayabSports = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{marginBottom: 50 }}>Naayab Sports</Typography>
            <Box style={{display: 'flex'}}> 
                <img className={classes.image} src={YouTube} alt="" />
                <img className={classes.image} src={Insta} alt="" />
            </Box>
        </Box>
        
    )
}

export default NaayabSports;