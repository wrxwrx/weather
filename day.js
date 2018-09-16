$(function () {
let weather="";
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
        dataType:"jsonp",
        success:function (res) {
            weather=res.data.weather;
            console.log(weather);
            myweather(weather);
        }
    })
//  地区
    function myweather(obj){
        $(".city_name").html(obj.city_name);
        $(".quality_level").html(obj.quality_level);
        $(".current_temperature").html(obj.current_temperature+"°");
        $(".dat_low_temperature").html(obj.dat_low_temperature+"C°");
        $(".dat_high_temperature").html(obj.dat_high_temperature);
        $(".today123").html(obj.current_condition);
        $(".yuan1").css("background-image",` url("img/${obj.dat_weather_icon_id}.png")`);
        $(".tomorrow_high_temperature").html(obj.tomorrow_high_temperature);
        $(".tomorrow_low_temperature").html(obj.tomorrow_low_temperature+"C°");
        $(".yuan2").css("background-image",` url("img/${obj.tomorrow_weather_icon_id}.png")`);
        obj.hourly_forecast.forEach(function (element) {
            let  str=`
        <li>
            <div class="time">${element.hour}:00</div>
            <div class="picture"  style="background-image: url(img/${element.weather_icon_id}.png);background-position: center;"></div>
            <div class="wendu">${element.temperature}C°</div>

        </li>`
            $(".bigday ul").append(str);
        })
        obj.forecast_list.slice(0,6).forEach(function (value) {
            let date=`<li>
                    <div class="today">昨天</div>
                    <div class="data">${value.date.slice(5,7)}/${value.date.slice(8,10)}</div>
                    <div class="tianqi">${value.condition}</div>
                   
                    <div class="pictt" style="background-image: url(img/${value.weather_icon_id}.png);background-position: center;"></div>
                </li>
            `
            let dates=`
             <li>
                    <div class="pictt"style="background-image: url(img/${value.weather_icon_id}.png);background-position: center;"></div>
                    <div class="tianqi">${value.condition}</div>
                    <div class="today">${value.wind_direction}</div>
                    <div class="data">${value.wind_level}级</div>
                </li>
            `
            $(".topdb12 ul").append(date);
            $(".topdb22 ul").append(dates);
            console.log();
        })


    }



})