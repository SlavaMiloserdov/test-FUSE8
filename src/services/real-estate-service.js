export default class RealEstateService {
    _apiBase = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

    getListOfProperties = async () => {
        const res = await fetch(`${this._apiBase}`);
        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`)
        };
        const data = await res.json();
        return data;
    };
}