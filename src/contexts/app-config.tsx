import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

type AppConfig = Record<string, any> | null

type AppConfigContextValue = {
  config: AppConfig
  loading: boolean
  error: Error | null
  reload: () => void
}

const defaultValue: AppConfigContextValue = {
  config: null,
  loading: true,
  error: null,
  reload: () => {},
}

export const AppConfigContext =
  createContext<AppConfigContextValue>(defaultValue)

export const AppConfigContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [config, setConfig] = useState<AppConfig>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [reloadFlag, setReloadFlag] = useState<number>(0)

  const loadConfig = useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/config.json', { signal })
      if (!response.ok)
        throw new Error(
          `Failed to load config: ${response.status} ${response.statusText}`
        )
      const json = await response.json()
      if (!signal?.aborted) setConfig(json)
    } catch (err) {
      if ((err as any).name === 'AbortError') {
        return
      }
      setError(err as Error)
      setConfig(null)
    } finally {
      if (!signal?.aborted) setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    loadConfig(controller.signal)
    return () => controller.abort()
  }, [loadConfig, reloadFlag])

  const reload = useCallback(() => {
    setReloadFlag((n) => n + 1)
  }, [])

  return (
    <AppConfigContext.Provider value={{ config, loading, error, reload }}>
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfig = () => {
  const context = useContext(AppConfigContext)
  if (!context) {
    throw new Error('useAppConfig must be used within a AppConfigContext')
  }
  return context
}

export default AppConfigContextProvider
