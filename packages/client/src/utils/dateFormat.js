import moment from 'moment';

const FORMAT = 'll';

export default (date) => moment(date).format(FORMAT);
