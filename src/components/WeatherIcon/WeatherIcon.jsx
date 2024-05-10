import "./WeatherIcon.css";

const WeatherIcon = ({src, alt}) => {
    // console.log(src, alt)
    return (
        <img src={src} alt={alt} />
    )
}

export default WeatherIcon;