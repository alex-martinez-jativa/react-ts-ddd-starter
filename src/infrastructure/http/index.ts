type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type Headers = {
  [key: string]: string
}
type IHttp<TBody> = {
  token?: string | null
  url: string
  method?: HttpMethod
  headers?: Headers
  body?: TBody
}

async function Http<TResponse, TBody>(options: IHttp<TBody>): Promise<TResponse> {
  const { token, url, method = 'GET', headers = { ContentType: 'application/json' }, body } = options

  const authToken = {
    ...(headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
  const response = await fetch(url, {
    method,
    headers: { ...headers, ...authToken },
    body: body ? JSON.stringify(body) : undefined,
  })
  return await response.json()
}

export default Http
