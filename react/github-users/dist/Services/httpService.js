import axios from "axios";
axios.defaults.headers.common["Authorization"] =
    "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";
axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
// axios.defaults.headers.common["User-Agent"] = "requests_error";
var http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
export default http;
//# sourceMappingURL=httpService.js.map