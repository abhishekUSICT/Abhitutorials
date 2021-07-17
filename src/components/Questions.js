import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Questions.css';
import '../global/Global.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionList from '../questions/QuestionList.js';
import axios from 'axios';
import * as API from '../constants/Apilocator.js';

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
    backgroundColor: theme.palette.background.paper,
  },
}));

function Questions() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState(0);
    const [flag, setFlag] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    useEffect(() => {
        setFlag(true);
        axios.get(`${API.BACKEND_ROOT}/getQuestions`)
            .then(res => {
                setData(res.data);
            });
    }, []);

  return (
    <>{flag && <div className={classes.root, "layout"}>
          <div className="topbar">
              <p className="topheading">Practice Questions</p>
          </div>
          <AppBar position="static" color="default">
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="white"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className="background"
                  selectionFollowsFocus
              >
                  <Tab style={{ backgroundColor: value == 0 ? "#006bb3" : "#0099cc", color: value == 0 ? "white" : "white", fontFamily: "Calibri", fontSize: "110%" }} label="Dynamic Programming" {...a11yProps(0)} />
                  <Tab style={{ backgroundColor: value == 1 ? "#006bb3" : "#0099cc", color: value == 1 ? "white" : "white", fontFamily: "Calibri", fontSize: "110%" }} label="Linked List" {...a11yProps(1)} />
                  <Tab style={{ backgroundColor: value == 2 ? "#006bb3" : "#0099cc", color: value == 2 ? "white" : "white", fontFamily: "Calibri", fontSize: "110%" }} label="Queue" {...a11yProps(2)} />
                  <Tab style={{ backgroundColor: value == 3 ? "#006bb3" : "#0099cc", color: value == 3 ? "white" : "white", fontFamily: "Calibri", fontSize: "110%" }} label="Stack" {...a11yProps(3)} />
                  <Tab style={{ backgroundColor: value == 4 ? "#006bb3" : "#0099cc", color: value == 4 ? "white" : "white", fontFamily: "Calibri", fontSize: "110%" }} label="Trees" {...a11yProps(4)} />
              </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
              <QuestionList content={data[0]} />
          </TabPanel>
          <TabPanel value={value} index={1}>
              <QuestionList content={data[1]}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <QuestionList content={data[2]}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
              <QuestionList content={data[3]}/>
          </TabPanel>
          <TabPanel value={value} index={4}>
              <QuestionList content={data[4]}/>
          </TabPanel>
      </div>}</>
  );
}

export default Questions;