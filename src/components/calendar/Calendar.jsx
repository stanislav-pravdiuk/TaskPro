import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import sprite from '../iconSvg/icon.svg';
import { IconDown } from './Calendar.styled';
import { toast } from 'react-hot-toast';

export const Calendar = ({ parentState, initial }) => {
  dayjs().format();

  const [dateDeadline, setDateDeadline] = useState(initial ? initial : '');

  useEffect(() => {}, [dateDeadline]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['month', 'day']}
          disablePast
          value={dateDeadline}
          desktopModeMediaQuery=""
          onChange={newValue => {
            if (dayjs(newValue).isBefore(dayjs(), 'day')) {
              toast.error('invalid date');
              return;
            }
            setDateDeadline(newValue);
            parentState(newValue);
          }}
          slots={{
            openPickerIcon: () => (
              <IconDown aria-label="chevron-down">
                <use href={sprite + '#icon-chevron-down'}></use>
              </IconDown>
            ),
          }}
          dayOfWeekFormatter={day => day.slice(0, 2)}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                color: '',
                backgroundColor: '#FFFFFF',
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
                '& .MuiPickersCalendarHeader-label': {
                  color: '#161616',
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                },
                '& .MuiSvgIcon-root': {
                  fill: '',
                },

                '& .MuiTypography-root': {
                  color: '',
                  height: '24px',
                  marginTop: '14px',
                },
                '& .MuiDayCalendar-weekContainer': {
                  justifyContent: 'space-between',
                },

                '& .MuiButtonBase-root': {
                  color: '',
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '18px',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  width: '100%',
                  justifyContent: 'space-between',
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                  display: 'none',
                },
                '& .MuiPickersCalendarHeader-root': {
                  padding: '0',
                  alignItems: 'baseline',
                  margin: '0',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                  borderColor: '',
                },

                '& .MuiPickersArrowSwitcher-button': {
                  height: '21px',
                },

                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
                  background: '',
                },

                '& .MuiPickersDay-hiddenDaySpacingFiller': {
                  height: '24px',
                  width: '24px',
                  minWidth: '24px',
                  maxWidth: '24px',
                },
              },
            },
            day: {
              sx: {
                height: '24px',
                width: '24px',
                minWidth: '24px',
                maxWidth: '24px',
                fontSize: '14px',

                '&.MuiPickersDay-root.Mui-selected': {
                  backgroundColor: '#BEDBB0',
                  color: '#161616',
                },

                '&.Mui-selected:hover': {
                  backgroundColor: '',
                },
                '&.MuiPickersDay-today': {
                  borderWidth: 1,
                  borderColor: '',
                  color: '',
                },
              },
            },
            textField: {
              variant: 'outlined',
              sx: {
                '& input': { display: 'none' },
                '& fieldset': { border: 'none' },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};
