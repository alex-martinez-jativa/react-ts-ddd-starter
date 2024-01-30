import { useEffect, useState } from 'react'

import { DemoUseCase } from '../../../application/use-cases/demoUseCase'

export default function DemoPage() {
  const [demoText, setDemoText] = useState<string | null>(null)

  const demoUseCase = new DemoUseCase()

  useEffect(() => {
    const { text } = demoUseCase.execute()
    setDemoText(text)
  }, [])

  return (
    <>
      <h1>{demoText}</h1>
    </>
  )
}
