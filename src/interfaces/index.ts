export interface IWeather {
  description: string;
  icon: string;
  id: string;
  main: string;
}

export interface ICurrentWeatherProps {
  dt: number;
  feels_like: number;
  temp: number;
  weather: IWeather[];
}

export interface IDailyWeatherProps {
  dt: number;
  feels_like: number;
  temp: IDailyProps;
  weather: IWeather[];
}

export interface ICurrentWeather {
  currentWeather: ICurrentWeatherProps
};

export interface IHourlyWeather {
  hourlyWeatherData: ICurrentWeatherProps
}

export interface IDailyWeather {
  dailyWeatherData: IDailyWeatherProps
}

export interface IViewProps {
  isLoaded: true;
}

export interface IDict {
  [key: string]: any;
}

export interface ILocalizationProps {
  name: string;
  country: string;
  state: string;
}

interface IDailyProps {
  max: number;
  min: number;
}
