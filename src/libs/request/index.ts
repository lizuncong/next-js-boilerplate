import { headers } from "next/headers";
import { StatusCode } from "./response-utils";



class Request {
  async request<Res>(options: RequestInit & { api: string }) {
    const { api, ...rest } = options;

    const config: RequestInit = {
      ...rest
    };

    try {
      const res = await fetch(api, config);
      if (!res.ok) {
        if (res.status === 404) {
          // not found
        }
        if (res.status === 400) {
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
        // return createErrorResponseJson(StatusCode.BAD_REQUEST);
      }
      console.log('not ok...', res)

      const result: Res = await res.json();

      // return createResponseJson({ ...result });
    } catch (err) {
      if (err.cause) {
        const { code, errno, syscall, hostname } = err.cause
        if (code === 'ENOTFOUND') {
          console.error('DNS 解析失败，域名：', hostname);
          return
        }
      }

      // return createErrorResponseJson(StatusCode.INTERNAL_ERROR);
    }
  }

  get<Req, Res>(options: { api: string; params?: Req; headers?: HeadersInit }) {
    const { api, params, headers } = options;
    return this.request<Res>({
      api: params ? api + `?${new URLSearchParams(params).toString()}` : api,
      method: 'GET',
      headers,
    });
  }

  post<Req, Res>(options: { api: string; params: Req; headers?: HeadersInit }) {
    const { api, params, headers } = options;
    return this.request<Res>({
      api: api,
      method: 'POST',
      body: params ? JSON.stringify(params) : null,
      headers: {
        'Content-Type': 'application/json', // 指定内容类型
        ...headers,
      },
    });
  }
}

export const request = new Request();
