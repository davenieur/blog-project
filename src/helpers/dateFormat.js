import moment from 'moment';

// Da formato a las fechas
export const dateFormat = (dateString) => {
    
    const dateObject = moment(dateString);

    const year = dateObject.year();
    const month = dateObject.month() + 1; // Los meses en Moment.js son indexados desde 0, por lo que se suma 1
    const day = dateObject.date();

    return `${day}/${month}/${year}`;

}



