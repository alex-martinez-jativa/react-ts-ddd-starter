type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type IHttp<TBody> = {
  token?: string | null
  url: string
  method: HttpMethod
  headers: Record<string, string>
  body?: TBody
}

async function Http<TBody, TResponse>(options: IHttp<TBody>): Promise<TResponse> {
  const { token, url, method, headers, body } = options

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
