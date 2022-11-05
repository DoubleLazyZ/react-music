import WGRequest from "@/service/request";
import { BASE_URL, TIME_OUT} from "@/service/config";


const wgRequest = new WGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
});

export default  wgRequest

