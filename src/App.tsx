import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useTranslate } from './hooks/useTranslate'

const App = () => {
  const { fromLanguage, setFromLanguage } = useTranslate()

  return (
    <div className="App">
      <h1>Google Translate</h1>
      <button
        onClick={() => {
          setFromLanguage('es')
        }}
      >
        Cambiar a Español
      </button>
      {fromLanguage}
    </div>
  )
}

export default App
