import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

import type { WGRequestConfig } from "@/service/request/type";
// interface WGInterceptors {
//   requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestFailFn: (err: any) => any,
//   responseSuccessFn: (res: AxiosResponse) => AxiosResponse,
//   responseFailFn: (err: any) => any,
// }
//
// interface WGRequestConfig extends AxiosRequestConfig {
//   interceptors ?: WGInterceptors
// }

class WGRequest {
  instance: AxiosInstance

  // request 實例 -> axios實例
  constructor(config: WGRequestConfig) {
    this.instance = axios.create(config)

    // 每個instance都增加interceptors
    this.instance.interceptors.request.use((config) => {
      // console.log("global request successful")
      return config
    }, err => {
      // console.log("global request fail")
      return err
    })
    this.instance.interceptors.response.use((response) => {
      return response
    }, err => {
      return err
    })


    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.requestFailFn
    )
  }

  // method encapsulate
  request<T = any>(config: WGRequestConfig<T>) {
    if(config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        if(config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T = any>(config: WGRequestConfig<T>) {
    return this.request({...config, method: "GET"})
  }

  post<T =any>(config: WGRequestConfig<T>) {
    return this.request({...config, method: "POST"})
  }

  delete<T = any>(config: WGRequestConfig<T>) {
    return this.request({...config, method: "DELETE"})
  }

  patch<T = any>(config: WGRequestConfig<T>) {
    return this.request({...config, method: "PATCH"})
  }
}

export default WGRequest;
