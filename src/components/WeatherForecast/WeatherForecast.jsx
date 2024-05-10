//Import
import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";
//Component
// const WeatherForecast = ({forecast}) => {
//     const {day, img, imgAlt, conditions, time} = forecast;
//     console.log(day, imgAlt, conditions, time);

//     return (
//         <div className="weather">
//             <h2>{day}</h2>
//             <img src={img} alt={imgAlt} />
//             <p><span>conditions: </span>{conditions}</p>
//             <p><span>time: </span>{time}</p>
//         </div>
//     )
// };

const WeatherForecast = (props) => {
    const {day, img, imgAlt, conditions, time} = props;
    console.log(day, imgAlt, conditions, time);

    return (
        <div className="weather">
            {/* <h2>{day}</h2> */}
            <WeatherIcon src={img} alt={imgAlt}/>
            {/* <img src={img} alt={imgAlt} /> */}
            {/* <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p> */}
            <WeatherData day={day} conditions={conditions} time={time}/>
        </div>
    )
};

export default WeatherForecast;