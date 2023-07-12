import { Configuration, OpenAIApi } from 'openai'
import { type FromLanguage, type Language } from '../types.d'

// TODO: NO PUBLICAR API KEY AQUI LA API KEY ES PERSONAL Y SE DEBERIA DE USAR UNA API PRIVADA PARA MANEJAR LAS PETICIONES OPENAI API

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({ apiKey })
const openai = new OpenAIApi(configuration)

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}) {
  const messages = [
    {
      role: 'system',
      content: 'You are a AI that translate text, you recive a text for user DO NOT ANSWERS just translate the text. The original language is surrounded by `{{` and `}}`.You can also recive {{auto}} wich means that you have to detect the language. The language you translate is wrapped by `[[` and `]]`'
    }
  ]
}
