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
  wind_speed?: string;
  visibility?: string;
  uvi?: string;
  humidity?: string;
  weather: IWeather[];
}

export interface ICurrentWeather {
  currentWeather: ICurrentWeatherProps
};

export interface IDailyWeatherProps {
  dt: number;
  feels_like: number;
  temp: IDailyProps;
  weather: IWeather[];
}

export interface IHourlyWeatherData {
  hourlyWeatherData: ICurrentWeatherProps[]
}

export interface IHourlyWeatherProps {
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

export interface IHeaderProps {
  localName: string;
}

export interface IDailyProps {
  max: number;
  min: number;
}

export interface ILocationProps {
  coords: {
    latitude: string;
    longitude: string;
  }
}

export interface ITitleProps {
  title: string;
}
