import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import sprite from '../iconSvg/icon.svg';
import { IconDown } from './Calendar.styled';
import { toast } from 'react-hot-toast';
import { useTheme } from '@mui/material';

export const Calendar = ({ parentState, initial }) => {
  dayjs().format();

  const theme = useTheme();

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
              <IconDown theme={theme} aria-label="chevron-down">
                <use href={sprite + '#icon-chevron-down'}></use>
              </IconDown>
            ),
          }}
          dayOfWeekFormatter={day => day.slice(0, 2)}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                '& .MuiPickersLayout-contentWrapper': {
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '8px',
                },
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  justifyContent: 'center',
                },
                '& .MuiPickersCalendarHeader-label': {
                  color: 'text.primary', // September 2023 (title)
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                },

                '& .MuiSvgIcon-root': {
                  fill: 'text.success', // стрілки вправо вліво біля September 2023
                },

                '& .MuiTypography-root': {
                  color: 'primary.info', //Назви днів  rgba(22, 22, 22, 0.5)
                  height: '24px',
                  marginTop: '14px',
                },
                '& .MuiDayCalendar-weekContainer': {
                  justifyContent: 'space-between',
                },

                '& .MuiButtonBase-root': {
                  color: 'text.primary', // числа місяця після вибраної дати
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
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderColor: 'text.success', // колір лінії під September 2023
                },

                '& .MuiPickersArrowSwitcher-button': {
                  height: '21px',
                },

                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
                  background: '', // фон всього календаря
                },

                '& .MuiPickersDay-hiddenDaySpacingFiller': {
                  height: '24px',
                  width: '24px',
                  minWidth: '24px',
                  maxWidth: '24px',
                },

                '& .MuiPickersDay-root.Mui-disabled': {
                  // color: 'text.success', // фон неактивних днів цього місяця
                  // color: 'grey', // фон неактивних днів цього місяця
                },
                
                '& .Mui-disabled:not(.Mui-selected)': {
                  // color: 'text.success',
                },

                '& .MuiPickersDay-root.Mui-disabled:not(.Mui-selected)': {
                  color: 'text.success', // color неактивні дні цього місяця
                },

                '& .MuiPickersMonth-monthButton': {
                  color: 'text.secondary', // текст назви місяця
                  '&:hover': {
                    bgcolor: 'primary.main', // ???? ховер при виборі місяця
                  },
                },
                '& .MuiPickersMonth-monthButton.Mui-selected': {
                  color: 'text.primary', // колір текст назви міс. selected
                  bgcolor: 'primary.main', // фон назви міс. selected
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
                  backgroundColor: 'primary.main', // фон вибраної дати
                  color: 'primary.darker', // колір цифри вибраної дати
                },

                '&.Mui-selected:hover': {
                  backgroundColor: '', // ховер при виборі дати
                },
                '&.MuiPickersDay-today': {
                  borderWidth: 1,
                  borderColor: 'primary.main',
                  bgcolor: 'primary.main', // фон сьогоднішньої дати навколо цифри
                  color: 'text.primary', // колір сьогоднішньої дати (цифри)
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
