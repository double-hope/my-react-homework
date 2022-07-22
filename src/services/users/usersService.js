import {ApiPath, ContentType, HttpMethod} from '../../common/enums/enums';

class Users {
    constructor({baseURL, http}) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.USERS;
    }

    getUsers(){
        return this._http.load(this._getUrl(), {
            method: HttpMethod.GET,
        });
    }


    createUser(payload) {
        return this._http.load(this._getUrl(), {
            method: HttpMethod.POST,
            contentType: ContentType.JSON,
            payload: JSON.stringify(payload),
        });
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}/${path}`;
    }

}

export { Users }