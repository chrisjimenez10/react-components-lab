import "./WeatherData.css";

const WeatherData = ({day, conditions, time}) => {

    return (
        <>
            <div id="data">
                <h2>{day}</h2>
                <p><span>conditions: </span>{conditions.charAt(0).toUpperCase() + conditions.slice(1)}</p>
                <p><span>time: </span>{time}</p>
            </div>
        </>
    )
}

export default WeatherData;