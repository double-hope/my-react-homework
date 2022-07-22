import { ApiPath, ContentType, HttpMethod } from '../../common/enums/enums';

class Bookings {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.BOOKINGS;
    }

    getBookings(){
        return this._http.load(this._getUrl(), {
            method: HttpMethod.GET,
        });
    }

    createBooking(payload) {
        return this._http.load(this._getUrl(), {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            payload: JSON.stringify(payload),
        });
    }

    deleteBooking(id) {
        return this._http.load(this._getUrl(id), {
            method: HttpMethod.DELETE,
        });
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}/${path}`;
    }
}

export { Bookings };