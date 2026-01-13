import { createErrorResponseJson, StatusCode, createResponseJson } from "./response-utils";



class Request {
  async request<Req, Res>(options: { api: string; method: string; data?: Req }) {
    const { api, method, data } = options;
    let url = api // `${process.env.GO_API_BASE}${api}`;
    let config: RequestInit = {
      method, // 指定请求方法
    };
    if (method === 'POST') {
      config = {
        ...config,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json', // 指定内容类型
        },
      };
    } else if (method === 'GET') {
      url += `?${new URLSearchParams(data).toString()}`;
    }
    try {
      const res = await fetch(url, config);
      if (!res.ok) {
        if(res.status === 404){
          // not found
        }
        if(res.status === 400){
          // bad request
        }
        console.log('res..not ok, Bad Request', res)
        let errorMsg = '';
        try {
          errorMsg = await res.text();
        } catch {
          errorMsg = 'Can not read response text.';
        }

        console.log('not ok...', errorMsg)
        return createErrorResponseJson(StatusCode.BAD_REQUEST);
      }
      console.log('not ok...', res)

      const result: Res = await res.json();

      return createResponseJson({ ...result });
    } catch (err) {
      if (err.cause) {
        const { code, errno, syscall,hostname } = err.cause
        if(code === 'ENOTFOUND'){
          console.error('DNS 解析失败，域名：', hostname);
          return 
        }
      }

      return createErrorResponseJson(StatusCode.INTERNAL_ERROR);
    }
  }

  get<Req, Res>(options: { api: string; params?:Req }) {
    return this.request<Req, Res>({
      api: options.api,
      method: 'GET',
      data: options.params,
    });
  }

  post(options: { api: string; params: any }) {
    return this.request({
      api: options.api,
      method: 'POST',
      data: options.params,
    });
  }
}

export const request = new Request();
