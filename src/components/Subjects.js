import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './Subjects.css';
import '../global/Global.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OperatingSystem from '../subjects/OperatingSystem.js';
import DBMS from '../subjects/DBMS.js';
import ComputerNetworks from '../subjects/ComputerNetworks.js';
import DSA from '../subjects/DSA.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

function Subjects() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    useEffect(() => {
        setFlag(true)
    }, []);
  return (
    <>{flag && <div className={classes.root, "layout"}>
          <div className="topbar">
              <p className="topheading">Core Technical Subjects</p>
          </div>
          <AppBar position="static" color="default">
              <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  indicatorColor="white"
                  className="background"
                  aria-label="scrollable auto tabs example"
                  selectionFollowsFocus
              >
                  <Tab style={{ backgroundColor: value == 0 ? "#006bb3" : "#0099cc", color: value == 0 ? "white" : "white", fontFamily: "Calibri", fontSize: "125%" }} label="Operating System" {...a11yProps(0)} />
                  <Tab style={{ backgroundColor: value == 1 ? "#006bb3" : "#0099cc", color: value == 1 ? "white" : "white", fontFamily: "Calibri", fontSize: "125%" }} label="DBMS" {...a11yProps(1)} />
                  <Tab style={{ backgroundColor: value == 2 ? "#006bb3" : "#0099cc", color: value == 2 ? "white" : "white", fontFamily: "Calibri", fontSize: "125%" }} label="Computer Networks" {...a11yProps(2)} />
                  <Tab style={{ backgroundColor: value == 3 ? "#006bb3" : "#0099cc", color: value == 3 ? "white" : "white", fontFamily: "Calibri", fontSize: "125%" }} label="DSA" {...a11yProps(3)} />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <OperatingSystem />
          </TabPanel>
          <TabPanel value={value} index={1}>
              <DBMS />
          </TabPanel>
          <TabPanel value={value} index={2}>
              <ComputerNetworks />
          </TabPanel>
          <TabPanel value={value} index={3}>
              <DSA />
          </TabPanel>
      </div>}</>
  );
}

export default Subjects;