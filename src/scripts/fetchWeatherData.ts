class RequestData {
  private latitude: number;

  private longitude: number;

  private requestKey: string;

  private requestLink: URL;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.requestKey = process.env.API_KEY;
    this.requestLink = new URL('https://api.openweathermap.org/data/2.5/weather');
  }

  private prepareRequestBody(): string {
    const searchParams = new URLSearchParams();
    searchParams.append('lat', this.latitude.toString());
    searchParams.append('lon', this.longitude.toString());
    searchParams.append('APPID', this.requestKey);
    return `${this.requestLink}?${searchParams.toString()}`;
  }

  public async requestData(): Promise<any> {
    const remoteData: string = this.prepareRequestBody();
    const responseData = await fetch(remoteData);
    return responseData.json();
  }
}

const fetchWeatherData = (position: Position): PositionCallback => {
  const request: RequestData = new RequestData(position.coords.latitude, position.coords.longitude);
  request.requestData().then((data) => {
    console.log(data);
  });
};

export default fetchWeatherData;
