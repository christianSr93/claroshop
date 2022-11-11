import { useEffect, useState } from 'react';

export default function useCounter ({countDownDate}){
  const countDownDateToDate = new Date(countDownDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDateToDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDateToDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDateToDate]);

  return getReturnValues(countDown);
};

const addLeadingZeros = (num, totalLength) =>{
  return String(num).padStart(totalLength, '0');
}

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return {days: addLeadingZeros(days,2), hours:addLeadingZeros(hours,2), minutes: addLeadingZeros(minutes,2), seconds: addLeadingZeros(seconds,2)};
};