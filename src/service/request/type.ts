import type {AxiosRequestConfig, AxiosResponse} from "axios";

export interface WGInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailFn?: (err: any) => any,
  responseSuccessFn?: (res: T) => T,
  responseFailFn?: (err: any) => any,
}

export interface WGRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors ?: WGInterceptors<T>
}
