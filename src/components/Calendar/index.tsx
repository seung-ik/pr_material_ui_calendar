import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { AppointmentsProps, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Toolbar,
  ViewSwitcher,
  Scheduler,
  WeekView,
  Appointments,
  DateNavigator,
  DayView
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Header from '../Header';

const Calendar = () => {

  const useStyles = makeStyles(theme => ({
    todayCell: {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, 0.14),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
      },
    },
    weekendCell: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
    },
    today: {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
  }));
  
  const TimeTableCell = (props:any) => {
    const classes = useStyles();
    const { startDate } = props;
    const date = new Date(startDate);
  
    if (date.getDate() === new Date().getDate()) {
      return <WeekView.TimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
      return <WeekView.TimeTableCell {...props} className={classes.weekendCell} />;
    } return <WeekView.TimeTableCell {...props} />;
  };
  
  const DayScaleCell = (props:any) => {
    const classes = useStyles();
    const { startDate, today } = props;
  
    if (today) {
      return <WeekView.DayScaleCell {...props} className={classes.today} />;
    } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      return <WeekView.DayScaleCell {...props} className={classes.weekend} />;
    } return <WeekView.DayScaleCell {...props} />;
  };
  const schedulerData = [
    { startDate: '2021-04-12T10:00', endDate: '2021-04-12T11:00', title: 'Meeting' },
    { startDate: '2021-04-14T00:00', endDate: '2021-04-14T13:30', title: 'birthday' },
  ];
  

  return(
  <div>
    <Header/>
    <Paper>
      <Scheduler
        data={schedulerData}
        locale={'ko'}
        firstDayOfWeek={1}
        >

        <ViewState />
        <Toolbar/>
        <DateNavigator/>
        <ViewSwitcher/>
        <WeekView
          startDayHour={9.5}
          endDayHour={21.5}
          timeTableCellComponent={TimeTableCell}
          dayScaleCellComponent={DayScaleCell}
          />
        <DayView startDayHour={10}
          endDayHour={21}/>
        <Appointments/>
      </Scheduler>
    </Paper>
  </div>
  )
}


export default Calendar